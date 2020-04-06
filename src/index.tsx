import React, { useState } from 'react';
import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import { JssProvider } from 'react-jss';

const getDefaultTheme = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const App = () => {
  const [themeType, setThemeType] = useState<'light' | 'dark'>(getDefaultTheme());
  const toggleDarkMode = (): void => setThemeType(themeType === 'dark' ? 'light' : 'dark');

  if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.onchange = (e) => setThemeType(e.matches ? 'dark' : 'light');
  }

  return (
    <JssProvider id={{ minify: true }}>
      <ZEITUIProvider theme={{ type: themeType }}>
        <CSSBaseline />
        <Dashboard toggleDarkMode={toggleDarkMode} />
      </ZEITUIProvider>
    </JssProvider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
