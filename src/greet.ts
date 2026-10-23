export const greet = (name: string) =>
  name.trim() === "" ? "Hello, guest" : `Hello, ${name}`;
