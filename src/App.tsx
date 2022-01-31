import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCardPage from './pages/AddCard';
import List from "./pages/List";
import { StoreProvider } from "./store/Provider";


function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Routes>
          <Route path={'/'} element={<List/>}/>
          <Route path={'/add'} element={<AddCardPage/>}/>
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
