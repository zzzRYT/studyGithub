export function register(email: string) {
  // 이메일로 회원가입 시작
  return sendVerificationEmail(email);
}
