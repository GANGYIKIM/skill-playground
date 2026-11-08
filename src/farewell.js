// 작별 인사 표시

// TODO: 작별 인사를 몇 초 동안 보여줄지 아직 정하지 않음 (임시값 3초)
export const FAREWELL_DURATION_MS = 3000;

// TODO: 작별 문구를 아직 정하지 않음 (임시 문구)
export const FAREWELL_MESSAGE = "안녕히 가세요!";

export function showFarewell(element) {
  element.textContent = FAREWELL_MESSAGE;
  setTimeout(() => {
    element.textContent = "";
  }, FAREWELL_DURATION_MS);
}
