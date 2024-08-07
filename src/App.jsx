import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './Components/All';
import { ProductProvider } from './Components/ProductContext';
import Detail from './Components/detail';

const App = () => {
  return (
    <ProductProvider>
   <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </Router>
    </ProductProvider>
 
  );
};

export default App;
