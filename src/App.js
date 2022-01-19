import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './pages/CardList';
import AddCard from './pages/AddCard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/add" element={<AddCard />} />
    </Routes>
  );
};

export default App;
