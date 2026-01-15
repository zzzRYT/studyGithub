export function sendVerificationEmail(email: string) {
  // 인증 이메일 발송
  const token = generateToken();
  return { email, token };
}
