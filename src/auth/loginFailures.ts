export type LoginAttempt = { success: boolean };

// TODO: 기획에서 잠금 기준이 정해지면 바꿀 임시값
export const MAX_LOGIN_FAILURES = 5;

// 마지막 성공 이후 연속으로 실패한 횟수
export const countFailures = (attempts: LoginAttempt[]) => {
  const lastSuccess = attempts.map((a) => a.success).lastIndexOf(true);
  return attempts.length - lastSuccess - 1;
};

export const shouldLock = (attempts: LoginAttempt[], maxFailures = MAX_LOGIN_FAILURES) =>
  countFailures(attempts) >= maxFailures;
