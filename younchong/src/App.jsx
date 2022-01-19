import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardMaker from './components/card_maker/card_maker';
import CardList from './components/card_list_page/card_list';
import CardAddPage from './components/card_add_page/card_add_page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardMaker />} />
        <Route path="/list" element={<CardList />} />
        <Route path="/add" element={<CardAddPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
