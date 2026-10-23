export const greet = (name: string) => {
  const trimmed = name.trim();
  return trimmed === "" ? "Hello, guest" : `Hello, ${trimmed}`;
};
