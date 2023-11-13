import React from "react";
import AddUser from "./components/AddUsers"; // Asegúrate de proporcionar la ruta correcta
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>App</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddUser />} exact></Route>
        </Routes>
      </BrowserRouter>    </div>
  );
};

export default App;
