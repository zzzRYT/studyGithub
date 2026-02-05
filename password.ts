export function setPassword(password: string): boolean {
  if (password.length < 8) {
    return false;
  }
  return true;
}

export function hashPassword(password: string): string {
  // 비밀번호 해싱
  return 'hashed_' + password;
}

export function createAccount(email: string, hashedPassword: string) {
  // 비밀번호까지 받은 시점에서 계정 생성
  return { email, hashedPassword, createdAt: new Date() };
}
