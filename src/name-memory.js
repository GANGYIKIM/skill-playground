// TODO: 이름을 기억하는 시간 미정 (30분 / 하루 / 브라우저를 닫을 때까지)
export const NAME_MEMORY_MS = 30 * 60 * 1000;

export function saveName(name) {
  localStorage.setItem("greeting-name", JSON.stringify({ name, savedAt: Date.now() }));
}

export function loadName() {
  const raw = localStorage.getItem("greeting-name");
  if (!raw) return null;
  const { name, savedAt } = JSON.parse(raw);
  return Date.now() - savedAt < NAME_MEMORY_MS ? name : null;
}
