import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'user-theme';
  private _isDarkMode = false;

  get isDarkMode(): boolean {
    return this._isDarkMode;
  }

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this._isDarkMode = savedTheme === 'dark';
    } else {
      this._isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this._isDarkMode = !this._isDarkMode;
    this.applyTheme();
    localStorage.setItem(this.THEME_KEY, this._isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this._isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}