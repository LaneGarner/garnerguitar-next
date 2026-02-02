export const capitalize = (title: string): string => title.charAt(0).toUpperCase() + title.slice(1);
export const toKebabCase = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")