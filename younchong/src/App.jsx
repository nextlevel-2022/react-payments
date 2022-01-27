import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardMaker from './components/card_make_page/card_maker/card_maker';
import CardList from './components/card_list_page/card_list_page';
import CardAddPage from './components/card_add_page/card_add_page';
import { useState } from 'react';

function App() {
  const [cards, setCard] = useState({});
  const [newCard, setNewCard] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardMaker setNewCard={setNewCard}/>} />
        <Route path="/list" element={<CardList cards={cards}/>} />
        <Route path="/add" element={<CardAddPage card={newCard} setCard={setCard}/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
