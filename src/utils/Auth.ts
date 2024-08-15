export function getAccessToken(): string | null {
  const token = localStorage.getItem("accessToken");
  return token;
}
