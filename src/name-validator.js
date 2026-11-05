export function validateName(name, { maxLength }) {
  if (name.length > maxLength) {
    return `이름은 ${maxLength}자 이하로 입력해 주세요.`;
  }
  return null;
}
