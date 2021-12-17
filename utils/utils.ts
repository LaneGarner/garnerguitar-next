export const capitalize = (title: string): string => title.charAt(0).toUpperCase() + title.slice(1);
export const toKebabCase = (title: string) =>  title.toLowerCase().split(" ").join("-")