export function formatDate(
  dateInput: string | Date,
  includeYear = false
): string {
  if (dateInput === "") {
    return "";
  }
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(includeYear && { year: "numeric" }),
  });
}
