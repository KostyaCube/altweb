import React from 'react';
import Authorization from './pages/authForm';
import { Route, Routes } from 'react-router-dom';
import Cards from './pages/cards';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Authorization />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  );
}

export default App;
