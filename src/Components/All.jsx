import React from 'react'
import Navbar from './Navbar'
import Welcome from './welcome'
import About from './About'
import Product from './Product'
import Natural from './Natural'

const All = () => {
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

export default All
