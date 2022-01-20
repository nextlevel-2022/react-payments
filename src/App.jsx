import React from "react";
import AddPage from "./pages/Add";
import AliasPage from "./pages/Alias";
import ListPage from "./pages/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPage />} />
        <Route path="add" element={<AddPage />} />
        <Route path="alias" element={<AliasPage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
