/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
const SessionStorage = {
  getValue<T>(key: string): T | null {
    try {
      const item = window.sessionStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  },
  setValue<T>(key: string, value: T): void {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
  clearAll(): void {
    window.sessionStorage.clear();
  },
};

const LocalStorage = {
  getValue<T>(key: string): T | null {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  },
  setValue<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
  clearAll(): void {
    window.localStorage.clear();
  },
};

export const Storage = {
  SessionStorage,
  LocalStorage,
};
