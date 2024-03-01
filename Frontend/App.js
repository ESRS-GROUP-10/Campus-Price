import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Homepage from './pages/homepage/homepage';
import Basket from './Components/Basket/Basket';
import './App.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
  
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/Basket" element={<Basket />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
