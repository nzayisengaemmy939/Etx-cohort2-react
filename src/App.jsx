import React from 'react'
import Navbar from './Components/Navbar'
import Natural from './Components/Natural'
import Welcome from './Components/welcome'
import About from './Components/About'
import Product from './Components/Product'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Natural></Natural>
      <About></About>
      <Product></Product>
    </div>
  )
}

export default App
