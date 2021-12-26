import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Product from './components/Product/Product';
import Param from './components/ProductDetails/Param';
import HomePage from './components/Home/HomePage';

class App extends Component {
  state = { myState: 'cool' };
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<HomePage/>} />

            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<Param />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
