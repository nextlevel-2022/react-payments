import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './pages/CardList'
// import logo from './logo.svg';
// import './app.css';
// import '../styles/index.css';
import Style from '../styles/index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardList />} />
        {/* <Route path="/add" component={AddCard} /> */}
        {/* <Route path="/profile" component={ProfilePage} /> */}
      </Routes>
    </>
  );
}

export default App;
