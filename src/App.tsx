import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from "./pages/ListPage";
import AddCardPage from "./pages/AddCardPage";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path={'/'} element={<ListPage/>}/>
        <Route path={'/add'} element={<AddCardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
