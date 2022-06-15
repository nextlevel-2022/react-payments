import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardIndexPage, CardNewPage, CardCompletePage } from './pages/Card';
import { CardProps } from '@interface';
import { initialNewCard } from '@constants';

const App = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [newCard, setNewCard] = useState<CardProps>(initialNewCard);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardIndexPage cards={cards} />} />
        <Route path="/cards/new" element={<CardNewPage newCard={newCard} setNewCard={setNewCard} />} />
        <Route path="/cards/complete" element={<CardCompletePage />} />
      </Routes>
    </div>
  );
};

export default App;
