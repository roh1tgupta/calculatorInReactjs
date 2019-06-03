import { createContext} from 'react';
export const themes = {
  light: {
    buttonsBackground: '#f0f0f0',
    pageBackground: '#fff',
    fontColor: '#000'
  },
  dark: {
    buttonsBackground: '#666',
    pageBackground: '#000',
    fontColor: '#fff'
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});