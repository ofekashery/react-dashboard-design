import React from 'react';
import Menu from './components/Menu';
import Heading from './components/Heading';
import Content from './components/Content';
import Footer from './components/Footer';

const App = ({ toggleDarkMode }: any) => {
  return (
    <>
      <Menu toggleDarkMode={toggleDarkMode} />
      <Heading />
      <Content />
      <Footer />
    </>
  );
};

export default App;
