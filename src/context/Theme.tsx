import { createContext } from 'react';

export const themes = {
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  }
}

// 系统主题：dark、light， 默认为：dark
export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => { }
})