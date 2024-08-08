import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './Components/All';
import { ProductProvider } from './Components/ProductContext';
import { Form } from 'react-router-dom';
import Detail from './Components/detail';
import Update from './Components/Update';

const App = () => {
  return (
    <ProductProvider>
   <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path='/update/:id' element={<Update />}/>
      </Routes>
    </Router>
    </ProductProvider>
 
  );
};

export default App;
