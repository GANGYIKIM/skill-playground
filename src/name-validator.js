export function validateName(name, { maxLength }) {
  if (name.length > maxLength) {
    return `이름은 ${maxLength}자 이하로 입력해 주세요.`;
  }
  if (/^\d+$/.test(name)) {
    return "이름에 숫자만 쓸 수는 없어요.";
  }
  return null;
}
