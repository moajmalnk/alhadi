export type DateRangePreset =
  | "all"
  | "today"
  | "yesterday"
  | "this_week"
  | "last_week"
  | "this_month"
  | "last_month"
  | "custom";

export type DateRangeValue = {
  preset: DateRangePreset;
  /** Inclusive start date as `YYYY-MM-DD`, used when preset is `custom`. */
  from: string | null;
  /** Inclusive end date as `YYYY-MM-DD`, used when preset is `custom`. */
  to: string | null;
};

export const DEFAULT_DATE_RANGE: DateRangeValue = {
  preset: "all",
  from: null,
  to: null,
};

export const DATE_RANGE_PRESET_OPTIONS: {
  value: DateRangePreset;
  label: string;
}[] = [
  { value: "all", label: "All time" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "this_week", label: "This week" },
  { value: "last_week", label: "Last week" },
  { value: "this_month", label: "This month" },
  { value: "last_month", label: "Last month" },
  { value: "custom", label: "Custom range" },
];

export function startOfDay(date: Date): Date {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function endOfDay(date: Date): Date {
  const next = new Date(date);
  next.setHours(23, 59, 59, 999);
  return next;
}

export function toDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseDateInputValue(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function startOfWeek(date: Date): Date {
  const next = startOfDay(date);
  const day = next.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  next.setDate(next.getDate() + diff);
  return next;
}

function endOfWeek(date: Date): Date {
  const start = startOfWeek(date);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return endOfDay(end);
}

function startOfMonth(date: Date): Date {
  return startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));
}

function endOfMonth(date: Date): Date {
  return endOfDay(new Date(date.getFullYear(), date.getMonth() + 1, 0));
}

export type DateRangeBounds = {
  start: Date | null;
  end: Date | null;
};

export function getDateRangeBounds(value: DateRangeValue): DateRangeBounds {
  const now = new Date();

  switch (value.preset) {
    case "all":
      return { start: null, end: null };
    case "today":
      return { start: startOfDay(now), end: endOfDay(now) };
    case "yesterday": {
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      return { start: startOfDay(yesterday), end: endOfDay(yesterday) };
    }
    case "this_week":
      return { start: startOfWeek(now), end: endOfWeek(now) };
    case "last_week": {
      const lastWeekRef = new Date(now);
      lastWeekRef.setDate(now.getDate() - 7);
      return { start: startOfWeek(lastWeekRef), end: endOfWeek(lastWeekRef) };
    }
    case "this_month":
      return { start: startOfMonth(now), end: endOfMonth(now) };
    case "last_month": {
      const lastMonthRef = new Date(now.getFullYear(), now.getMonth() - 1, 15);
      return { start: startOfMonth(lastMonthRef), end: endOfMonth(lastMonthRef) };
    }
    case "custom": {
      const from = value.from ? parseDateInputValue(value.from) : null;
      const to = value.to ? parseDateInputValue(value.to) : null;
      return {
        start: from ? startOfDay(from) : null,
        end: to ? endOfDay(to) : null,
      };
    }
    default:
      return { start: null, end: null };
  }
}

export function isDateInRange(
  dateInput: Date | string,
  value: DateRangeValue
): boolean {
  const { start, end } = getDateRangeBounds(value);
  if (!start && !end) return true;

  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  if (Number.isNaN(date.getTime())) return false;

  if (start && date < start) return false;
  if (end && date > end) return false;
  return true;
}

function formatDisplayDate(value: string): string {
  const date = parseDateInputValue(value);
  if (!date) return value;
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getDateRangeLabel(value: DateRangeValue): string {
  if (value.preset === "custom" && value.from && value.to) {
    return `${formatDisplayDate(value.from)} – ${formatDisplayDate(value.to)}`;
  }

  return (
    DATE_RANGE_PRESET_OPTIONS.find((option) => option.value === value.preset)
      ?.label ?? "All time"
  );
}

export function createPresetRange(preset: DateRangePreset): DateRangeValue {
  if (preset === "custom") {
    return { preset: "custom", from: null, to: null };
  }
  return { preset, from: null, to: null };
}

export function createCustomRange(from: string, to: string): DateRangeValue {
  return { preset: "custom", from, to };
}
