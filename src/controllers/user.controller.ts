import type { CurrentUser } from "@/models/user";

// TODO: replace with a real session/auth lookup once available.
const MOCK_CURRENT_USER: CurrentUser = {
  name: "Amélie Martin",
  initials: "AM",
  location: "France",
  role: "Data requester",
};

export function getCurrentUser(): CurrentUser {
  return MOCK_CURRENT_USER;
}
