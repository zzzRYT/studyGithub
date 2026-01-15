export function register(email: string) {
  // 이메일로 회원가입 시작
  return sendVerificationEmail(email);
}

export function checkEmailExists(email: string): boolean {
  // DB에서 이메일 존재 여부 확인
  return false;
}
