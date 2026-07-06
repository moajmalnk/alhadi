export type LeadSource = "popup" | "home" | "contact";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "won"
  | "lost";

export type LeadNote = {
  id: string;
  text: string;
  createdAt: string;
};

export type Lead = {
  id: string;
  source: LeadSource;
  name: string;
  email?: string;
  phone: string;
  message: string;
  businessType?: string;
  status: LeadStatus;
  notes: LeadNote[];
  createdAt: string;
  updatedAt: string;
};

export type CreateLeadInput = {
  source: LeadSource;
  name: string;
  email?: string;
  phone: string;
  message: string;
  businessType?: string;
};

export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  popup: "Popup Modal",
  home: "Home CTA",
  contact: "Contact Us",
};

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  won: "Won",
  lost: "Lost",
};

export const LEAD_STATUSES: LeadStatus[] = [
  "new",
  "contacted",
  "qualified",
  "won",
  "lost",
];

const STORAGE_KEY = "alhadi_demo_leads";
const CHANGE_EVENT = "alhadi-leads-changed";

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function readLeads(): Lead[] {
  if (!canUseStorage()) return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]): void {
  if (!canUseStorage()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function getLeads(): Lead[] {
  return readLeads().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getLeadsBySource(source: LeadSource): Lead[] {
  return getLeads().filter((lead) => lead.source === source);
}

export function getLeadById(id: string): Lead | undefined {
  return getLeads().find((lead) => lead.id === id);
}

export function createLead(input: CreateLeadInput): Lead {
  const now = new Date().toISOString();
  const lead: Lead = {
    id: createId(),
    source: input.source,
    name: input.name.trim(),
    email: input.email?.trim() || undefined,
    phone: input.phone.trim(),
    message: input.message.trim(),
    businessType: input.businessType?.trim() || undefined,
    status: "new",
    notes: [],
    createdAt: now,
    updatedAt: now,
  };

  const leads = readLeads();
  leads.unshift(lead);
  writeLeads(leads);
  return lead;
}

export type UpdateLeadInput = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  businessType?: string;
  status?: LeadStatus;
};

export function updateLead(
  id: string,
  input: UpdateLeadInput
): Lead | undefined {
  const leads = readLeads();
  const index = leads.findIndex((lead) => lead.id === id);
  if (index === -1) return undefined;

  const current = leads[index];
  const updated: Lead = {
    ...current,
    name: input.name !== undefined ? input.name.trim() : current.name,
    email:
      input.email !== undefined
        ? input.email.trim() || undefined
        : current.email,
    phone: input.phone !== undefined ? input.phone.trim() : current.phone,
    message:
      input.message !== undefined ? input.message.trim() : current.message,
    businessType:
      input.businessType !== undefined
        ? input.businessType.trim() || undefined
        : current.businessType,
    status: input.status ?? current.status,
    updatedAt: new Date().toISOString(),
  };

  leads[index] = updated;
  writeLeads(leads);
  return updated;
}

export function updateLeadStatus(
  id: string,
  status: LeadStatus
): Lead | undefined {
  return updateLead(id, { status });
}

export function deleteLead(id: string): boolean {
  const leads = readLeads();
  const next = leads.filter((lead) => lead.id !== id);
  if (next.length === leads.length) return false;
  writeLeads(next);
  return true;
}

export function addLeadNote(id: string, text: string): Lead | undefined {
  const trimmed = text.trim();
  if (!trimmed) return undefined;

  const leads = readLeads();
  const index = leads.findIndex((lead) => lead.id === id);
  if (index === -1) return undefined;

  const note: LeadNote = {
    id: createId(),
    text: trimmed,
    createdAt: new Date().toISOString(),
  };

  const updated: Lead = {
    ...leads[index],
    notes: [note, ...leads[index].notes],
    updatedAt: new Date().toISOString(),
  };
  leads[index] = updated;
  writeLeads(leads);
  return updated;
}

export function subscribeToLeads(onChange: () => void): () => void {
  if (!canUseStorage()) return () => undefined;

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) onChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export function formatLeadDate(value: string): string {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
