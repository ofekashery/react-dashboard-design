import React, { useState } from 'react';
import { ZeitUIThemes, ZEITUIProvider, CSSBaseline } from '@zeit-ui/react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import { JssProvider } from 'react-jss';

const App = () => {
  const [themeType, setThemeType] = useState<'light' | 'dark'>('light');
  const toggleDarkMode = (): void =>
    setThemeType(themeType === 'dark' ? 'light' : 'dark');

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
