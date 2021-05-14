import { createContext, useContext } from 'react';

export const themes = ['light', 'dark'] as const;
export type ThemeType = typeof themes[number];

interface Prefers {
  themeType: ThemeType;
  switchTheme: (type: ThemeType) => void;
}

export const PrefersContext = createContext<Prefers>({
  themeType: 'dark',
  switchTheme: () => {}
});

export const usePrefers = (): Prefers => useContext(PrefersContext);
