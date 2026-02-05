export function sendVerificationEmail(email: string) {
  // 인증 이메일 발송
  const token = generateToken();
  return { email, token };
}

export function verifyToken(token: string): boolean {
  // 토큰 검증
  return token.length === 32;
}
