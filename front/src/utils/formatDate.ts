export function formatDate(
  date: string | Date,
  locale: string = "en-GB",
): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  return parsedDate.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
