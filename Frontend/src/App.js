import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Homepage from './pages/homepage/homepage';
import Basket from './Components/Basket/Basket';
import Adduser from './pages/adduser/adduser';
import Admin from './pages/Admin/admin';
import { Container } from 'react-bootstrap';
import './App.css';



function App() {
  return (
  
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/Basket" element={<Basket />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
