import React, { useState } from 'react';
import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Theme from '../typings/Theme';
import * as serviceWorker from './serviceWorker';
import { JssProvider } from 'react-jss';

const App = () => {
  const [type, setType] = useState<'light' | 'dark'>('light');
  const toggleDarkMode = (theme: Theme) => {
    const nextTheme = theme.type === 'dark' ? 'light' : 'dark';
    setType(nextTheme);
  };

  return (
    <JssProvider id={{ minify: true }}>
      <ZEITUIProvider theme={{ type }}>
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
