import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { UserContext  } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'hexa_user';

  // simple signal to hold current user
  private _user = signal<UserContext | null>(null);
  public readonly user = this._user;

  constructor() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as UserContext;
        this._user.set(parsed);
      } catch {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }
  }

  // Mock login: accepts username and password, returns a Promise resolving to UserContext
  login(username: string, password: string): Promise<UserContext> {
    return new Promise((resolve, reject) => {
      // emulate network delay
      setTimeout(() => {
        if (!username || !password) {
          return reject(new Error('Username and password are required'));
        }

        // Simple mock rules: any username/password accepted; token is base64 of username:password
        const token = btoa(`${username}:${password}`);
        const user: UserContext = {
          id: Math.floor(Math.random() * 10000) + 1,
          username,
          displayName: username,
          email: `${username}@example.com`,
          token,
        };

        this._user.set(user);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));

        resolve(user);
      }, 700);
    });
  }

  logout() {
    this._user.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return !!this._user();
  }

  getToken(): string | undefined {
    return this._user()?.token;
  }
}
