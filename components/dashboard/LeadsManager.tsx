"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import ConfirmDialog from "@/components/ConfirmDialog";
import CustomDropdown from "@/components/CustomDropdown";
import Toast from "@/components/Toast";
import {
  DateRangeValue,
  DEFAULT_DATE_RANGE,
  FilterBar,
  FilterSelect,
  DateRangeFilter,
  SearchBar,
  isDateInRange,
} from "@/components/filters";
import {
  LEAD_SOURCE_LABELS,
  LEAD_STATUS_LABELS,
  LEAD_STATUSES,
  Lead,
  LeadSource,
  LeadStatus,
  addLeadNote,
  deleteLead,
  formatLeadDate,
  getLeads,
  subscribeToLeads,
  updateLead,
  updateLeadStatus,
} from "@/lib/leads";

type ToastState = {
  message: string;
  type: "success" | "error";
};

const TABS: { id: LeadSource; label: string }[] = [
  { id: "popup", label: LEAD_SOURCE_LABELS.popup },
  { id: "home", label: LEAD_SOURCE_LABELS.home },
  { id: "contact", label: LEAD_SOURCE_LABELS.contact },
];

const STATUS_OPTIONS = LEAD_STATUSES.map((status) => ({
  value: status,
  label: LEAD_STATUS_LABELS[status],
}));

const STATUS_FILTER_OPTIONS = [
  { value: "all", label: "All statuses" },
  ...STATUS_OPTIONS,
];

const BUSINESS_TYPE_OPTIONS = [
  { value: "startup", label: "Startup" },
  { value: "agency", label: "Agency / Studio" },
  { value: "enterprise", label: "Enterprise" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Other" },
];

type EditFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  businessType: string;
};

function statusBadgeStyle(status: LeadStatus): React.CSSProperties {
  switch (status) {
    case "new":
      return { backgroundColor: "#ffc107", color: "#000" };
    case "contacted":
      return { backgroundColor: "#0dcaf0", color: "#000" };
    case "qualified":
      return { backgroundColor: "#fd7e14", color: "#000" };
    case "won":
      return { backgroundColor: "#198754", color: "#fff" };
    case "lost":
      return { backgroundColor: "#7BB8D9", color: "#fff" };
    default:
      return { backgroundColor: "#EAF5F9", color: "#000" };
  }
}

function toEditForm(lead: Lead): EditFormState {
  return {
    name: lead.name,
    email: lead.email ?? "",
    phone: lead.phone,
    message: lead.message,
    businessType: lead.businessType ?? "",
  };
}

export default function LeadsManager() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activeTab, setActiveTab] = useState<LeadSource>("popup");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<EditFormState | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] =
    useState<DateRangeValue>(DEFAULT_DATE_RANGE);
  const [toast, setToast] = useState<ToastState | null>(null);

  const refresh = () => setLeads(getLeads());

  const showToast = useCallback(
    (message: string, type: ToastState["type"] = "success") => {
      setToast({ message, type });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  useEffect(() => {
    setMounted(true);
    refresh();
    return subscribeToLeads(refresh);
  }, []);

  const filteredLeads = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return leads
      .filter((lead) => lead.source === activeTab)
      .filter(
        (lead) => statusFilter === "all" || lead.status === statusFilter
      )
      .filter((lead) => isDateInRange(lead.createdAt, dateRange))
      .filter((lead) => {
        if (!query) return true;
        const haystack = [
          lead.name,
          lead.phone,
          lead.email ?? "",
          lead.message,
          lead.businessType ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      });
  }, [leads, activeTab, statusFilter, dateRange, searchQuery]);

  const selectedLead = useMemo(
    () => leads.find((lead) => lead.id === selectedId) ?? null,
    [leads, selectedId]
  );

  const resetDrawerState = () => {
    setSelectedId(null);
    setNoteText("");
    setIsEditing(false);
    setEditForm(null);
    setDeleteConfirmOpen(false);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    window.setTimeout(() => {
      setDrawerVisible(false);
      resetDrawerState();
    }, 220);
  };

  const openLead = (id: string) => {
    const lead = getLeads().find((item) => item.id === id);
    setSelectedId(id);
    setNoteText("");
    setIsEditing(false);
    setEditForm(lead ? toEditForm(lead) : null);
    setDeleteConfirmOpen(false);
    setDrawerVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setDrawerOpen(true));
    });
  };

  useEffect(() => {
    if (selectedId && !filteredLeads.some((lead) => lead.id === selectedId)) {
      closeDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredLeads, selectedId]);

  useEffect(() => {
    if (!drawerVisible) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (deleteConfirmOpen) return;
      if (isEditing) {
        cancelEdit();
        return;
      }
      closeDrawer();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerVisible, deleteConfirmOpen, isEditing]);

  const handleTabChange = (tab: LeadSource) => {
    setActiveTab(tab);
    if (drawerVisible) closeDrawer();
  };

  const handleStatusChange = (status: string) => {
    if (!selectedLead) return;
    const updated = updateLeadStatus(selectedLead.id, status as LeadStatus);
    if (!updated) {
      showToast("Could not update lead status.", "error");
      return;
    }
    refresh();
    showToast(
      `Status updated to ${LEAD_STATUS_LABELS[status as LeadStatus]}.`
    );
  };

  const startEdit = () => {
    if (!selectedLead) return;
    setEditForm(toEditForm(selectedLead));
    setIsEditing(true);
  };

  const cancelEdit = () => {
    if (!selectedLead) {
      setIsEditing(false);
      setEditForm(null);
      return;
    }
    setEditForm(toEditForm(selectedLead));
    setIsEditing(false);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !editForm) return;

    const updated = updateLead(selectedLead.id, {
      name: editForm.name,
      email: editForm.email,
      phone: editForm.phone,
      message: editForm.message,
      ...(selectedLead.source === "popup"
        ? { businessType: editForm.businessType }
        : {}),
    });
    if (!updated) {
      showToast("Could not save lead changes.", "error");
      return;
    }
    setIsEditing(false);
    refresh();
    showToast("Lead updated successfully.");
  };

  const handleDeleteConfirm = () => {
    if (!selectedLead) return;
    const removed = deleteLead(selectedLead.id);
    setDeleteConfirmOpen(false);
    if (!removed) {
      showToast("Could not delete lead.", "error");
      return;
    }
    closeDrawer();
    refresh();
    showToast("Lead deleted successfully.");
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !noteText.trim()) return;
    const updated = addLeadNote(selectedLead.id, noteText);
    if (!updated) {
      showToast("Could not add note.", "error");
      return;
    }
    setNoteText("");
    refresh();
    showToast("Note added successfully.");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    statusFilter !== "all" ||
    dateRange.preset !== "all";

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setDateRange(DEFAULT_DATE_RANGE);
  };

  if (!mounted) {
    return <div className="dash-panel dash-empty">Loading leads…</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
        <div>
          <p className="dash-label mb-1">Demo storage</p>
          <h1 className="dash-page-title text-dark">Leads</h1>
          <p className="text-muted mb-0">
            Submissions from the site are saved in this browser for client demos.
          </p>
        </div>
        <span
          className="badge align-self-start"
          style={{ backgroundColor: "var(--bs-secondary)", color: "#fff" }}
        >
          {leads.length} total
        </span>
      </div>

      <FilterBar
        showClear={hasActiveFilters}
        onClear={clearFilters}
        end={
          <ul className="nav nav-pills gap-1 flex-wrap mb-0">
            {TABS.map((tab) => {
              const count = leads.filter((lead) => lead.source === tab.id)
                .length;
              const isActive = activeTab === tab.id;
              return (
                <li className="nav-item" key={tab.id}>
                  <button
                    type="button"
                    className={`nav-link border ${
                      isActive
                        ? "active bg-dark text-white"
                        : "bg-white text-dark"
                    }`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                    <span
                      className="badge"
                      style={
                        isActive
                          ? { backgroundColor: "#ffffff", color: "#000" }
                          : { backgroundColor: "var(--bs-secondary)", color: "#ffffff" }
                      }
                    >
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        }
      >
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search name, phone, email, message…"
        />
        <FilterSelect
          id="lead-status-filter"
          options={STATUS_FILTER_OPTIONS}
          value={statusFilter}
          onChange={setStatusFilter}
          placeholder="All statuses"
        />
        <DateRangeFilter value={dateRange} onChange={setDateRange} />
      </FilterBar>

      <div className="dash-panel">
        <div className="dash-panel-header">
          <h2 className="dash-section-title">
            {LEAD_SOURCE_LABELS[activeTab]}
          </h2>
          <span className="text-muted">
            {filteredLeads.length} result
            {filteredLeads.length === 1 ? "" : "s"}
          </span>
        </div>

        {filteredLeads.length === 0 ? (
          <div className="dash-empty">
            {leads.some((lead) => lead.source === activeTab)
              ? "No leads match your current filters."
              : "No leads from this source yet. Submit the form on the site to see it here."}
          </div>
        ) : (
          <div className="dash-lead-grid">
            {filteredLeads.map((lead) => {
              const isSelected = selectedId === lead.id && drawerOpen;
              return (
                <button
                  key={lead.id}
                  type="button"
                  className={`dash-lead-card ${isSelected ? "is-selected" : ""}`}
                  onClick={() => openLead(lead.id)}
                >
                  <div className="dash-lead-card-top">
                    <div className="dash-lead-card-name" title={lead.name}>
                      {lead.name}
                    </div>
                    <span
                      className="badge flex-shrink-0"
                      style={statusBadgeStyle(lead.status)}
                    >
                      {LEAD_STATUS_LABELS[lead.status]}
                    </span>
                  </div>
                  <div className="dash-lead-card-meta" title={lead.phone}>
                    {lead.phone}
                  </div>
                  {lead.email && (
                    <div className="dash-lead-card-meta" title={lead.email}>
                      {lead.email}
                    </div>
                  )}
                  <div className="dash-lead-card-meta">
                    {formatLeadDate(lead.createdAt)}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {drawerVisible && selectedLead && (
        <>
          <div
            className={`dash-drawer-backdrop ${drawerOpen ? "is-open" : ""}`}
            onClick={() => {
              if (!deleteConfirmOpen) closeDrawer();
            }}
            aria-hidden="true"
          />
          <aside
            className={`dash-drawer ${drawerOpen ? "is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Lead detail"
          >
            <div className="dash-drawer-header">
              <div className="min-w-0">
                <p className="dash-label mb-1">Lead detail</p>
                <h2 className="dash-section-title text-dark text-truncate">
                  {selectedLead.name}
                </h2>
                <p className="text-muted mb-0">
                  Received {formatLeadDate(selectedLead.createdAt)}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary flex-shrink-0"
                onClick={closeDrawer}
              >
                Close
              </button>
            </div>

            <div className="dash-drawer-body">
              {isEditing && editForm ? (
                <form
                  id="edit-lead-form"
                  className="d-flex flex-column gap-2"
                  onSubmit={handleSaveEdit}
                >
                  <div>
                    <label className="form-label" htmlFor="edit-lead-name">
                      Name
                    </label>
                    <input
                      id="edit-lead-name"
                      className="form-control"
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="edit-lead-phone">
                      Phone
                    </label>
                    <input
                      id="edit-lead-phone"
                      type="tel"
                      className="form-control"
                      value={editForm.phone}
                      onChange={(e) =>
                        setEditForm({ ...editForm, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="edit-lead-email">
                      Email
                    </label>
                    <input
                      id="edit-lead-email"
                      type="email"
                      className="form-control"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                    />
                  </div>
                  {selectedLead.source === "popup" && (
                    <div>
                      <label className="form-label" htmlFor="edit-lead-business">
                        Business type
                      </label>
                      <CustomDropdown
                        id="edit-lead-business"
                        variant="compact"
                        options={BUSINESS_TYPE_OPTIONS}
                        value={editForm.businessType}
                        onChange={(value) =>
                          setEditForm({ ...editForm, businessType: value })
                        }
                        placeholder="Select business type"
                      />
                    </div>
                  )}
                  <div>
                    <label className="form-label" htmlFor="edit-lead-message">
                      Message
                    </label>
                    <textarea
                      id="edit-lead-message"
                      className="form-control"
                      rows={3}
                      value={editForm.message}
                      onChange={(e) =>
                        setEditForm({ ...editForm, message: e.target.value })
                      }
                      required
                    />
                  </div>
                </form>
              ) : (
                <div className="d-flex flex-column gap-2">
                  <div className="dash-field">
                    <div className="dash-field-label">Phone</div>
                    <div className="dash-field-value">{selectedLead.phone}</div>
                  </div>
                  <div className="dash-field">
                    <div className="dash-field-label">Email</div>
                    <div className="dash-field-value">
                      {selectedLead.email || "—"}
                    </div>
                  </div>
                  {selectedLead.businessType && (
                    <div className="dash-field">
                      <div className="dash-field-label">Business type</div>
                      <div className="dash-field-value text-capitalize">
                        {selectedLead.businessType}
                      </div>
                    </div>
                  )}
                  <div className="dash-field">
                    <div className="dash-field-label">Source</div>
                    <div className="dash-field-value">
                      {LEAD_SOURCE_LABELS[selectedLead.source]}
                    </div>
                  </div>
                  <div className="dash-field">
                    <div className="dash-field-label">Message</div>
                    <p
                      className="dash-field-value mb-0 fw-normal"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {selectedLead.message}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <label className="form-label" htmlFor="lead-status">
                  Status
                </label>
                <CustomDropdown
                  id="lead-status"
                  variant="compact"
                  options={STATUS_OPTIONS}
                  value={selectedLead.status}
                  onChange={handleStatusChange}
                  placeholder="Select status"
                  disabled={isEditing}
                />
              </div>

              {!isEditing && (
                <div className="border-top pt-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 className="dash-section-title mb-0">Notes</h3>
                    <span className="text-muted">
                      {selectedLead.notes.length} note
                      {selectedLead.notes.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <form
                    className="d-flex flex-column gap-2 mb-3"
                    onSubmit={handleAddNote}
                  >
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Add a note about this lead…"
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-dark align-self-start"
                      disabled={!noteText.trim()}
                    >
                      Add note
                    </button>
                  </form>

                  {selectedLead.notes.length === 0 ? (
                    <p className="text-muted mb-0">
                      No notes yet. Add the first follow-up note above.
                    </p>
                  ) : (
                    <div className="d-flex flex-column gap-2">
                      {selectedLead.notes.map((note) => (
                        <div key={note.id} className="dash-note">
                          <div className="dash-note-meta">
                            {formatLeadDate(note.createdAt)}
                          </div>
                          <p className="dash-note-body">{note.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="dash-drawer-footer">
              <div className="row g-2">
                {isEditing ? (
                  <>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        form="edit-lead-form"
                        className="btn btn-dark"
                      >
                        Save changes
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={startEdit}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => setDeleteConfirmOpen(true)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </aside>
        </>
      )}

      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        title="Delete lead?"
        message={
          selectedLead
            ? `This will permanently remove “${selectedLead.name}” and all notes. This action cannot be undone.`
            : "This will permanently remove this lead and all notes."
        }
        confirmLabel="Delete lead"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteConfirmOpen(false)}
      />

      <Toast
        message={toast?.message ?? ""}
        type={toast?.type}
        isVisible={toast !== null}
        onClose={hideToast}
      />
    </div>
  );
}
