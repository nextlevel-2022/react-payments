import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCardPage from './pages/AddCard';
import List from "./pages/List";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path={'/'} element={<List/>}/>
        <Route path={'/add'} element={<AddCardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
