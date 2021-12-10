import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import NavMenu from './components/NavMenu';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>
    </>
  );
}
