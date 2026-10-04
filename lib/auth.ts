export type SavedUser = {
  nickname: string;
  isAdmin: boolean;
  createdAt: string;
};

export const DEFAULT_ADMIN_NICKNAME = "stay99";
export const AUTH_STORAGE_KEY = "band-community-user";

export function readStoredUser() {
  if (typeof window === "undefined") return null;

  const sessionValue = window.sessionStorage.getItem(AUTH_STORAGE_KEY);
  if (sessionValue) {
    try {
      return JSON.parse(sessionValue) as SavedUser;
    } catch {
      return null;
    }
  }

  const localValue = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (localValue) {
    try {
      return JSON.parse(localValue) as SavedUser;
    } catch {
      return null;
    }
  }

  return null;
}

export function saveUser(user: SavedUser, remember: boolean) {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify(user);
  if (remember) {
    window.localStorage.setItem(AUTH_STORAGE_KEY, payload);
    window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
  } else {
    window.sessionStorage.setItem(AUTH_STORAGE_KEY, payload);
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function clearUser() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

export function normalizeNickname(value: string) {
  return value.trim().replace(/\s+/g, "");
}

export function isNicknameTaken(value: string) {
  if (typeof window === "undefined") return false;

  const local = window.localStorage.getItem(AUTH_STORAGE_KEY);
  const session = window.sessionStorage.getItem(AUTH_STORAGE_KEY);
  const current = [local, session]
    .map((entry) => (entry ? JSON.parse(entry) : null))
    .find(Boolean);

  if (!current) return false;
  return current.nickname === value;
}
