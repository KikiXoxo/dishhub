import { create } from 'zustand';

export const useThemeStore = create(set => ({
  theme: localStorage.getItem('theme') || 'light',

  toggleTheme: () =>
    set(state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      // If newTheme = dark, add class dark to html element. If not, remove class dark
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return { theme: newTheme };
    }),
}));
