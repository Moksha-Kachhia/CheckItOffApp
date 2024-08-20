import React from 'react';
import {Route, Routes} from 'react-router';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import List from './pages/List/List';

//import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
