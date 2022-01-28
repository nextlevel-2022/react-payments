import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './pages/CardList';
// import AddCard from './pages/AddCard';
import AddCardContainer from './containers/addCard/AddCardContainer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      {/* <Route path="/add" element={<AddCard />} /> */}
      <Route path="/add" element={<AddCardContainer />} />
    </Routes>
  );
};

export default App;
