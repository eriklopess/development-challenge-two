import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import CustomerProvider from './context/customer.context';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <CustomerProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Customers" element={<Customers />} />
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
