import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import CustomerProvider from './context/customer.context';

function App() {
  return (
    <BrowserRouter>
      <CustomerProvider>
        <Routes>
          <Route path="/" element={<Customers />} />
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
