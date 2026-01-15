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
