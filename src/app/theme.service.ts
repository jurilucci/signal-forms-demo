import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'signal-forms-demo-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>('system');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored && ['light', 'dark', 'system'].includes(stored)) this.theme.set(stored);
      this.applyTheme();
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) this.applyTheme();
    });

    if (isPlatformBrowser(this.platformId)) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.theme() === 'system') this.applyTheme();
      });
    }
  }

  private applyTheme(): void {
    const t = this.theme();
    const effective: 'light' | 'dark' =
      t === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : t;
    document.documentElement.setAttribute('data-theme', effective);
  }

  setTheme(t: Theme): void {
    this.theme.set(t);
    if (isPlatformBrowser(this.platformId)) localStorage.setItem(STORAGE_KEY, t);
  }
}
