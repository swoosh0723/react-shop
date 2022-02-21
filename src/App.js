
import { useState } from 'react';
import './App.css';
import Header from './components/header'
import MainBanner from './components/mainBanner'
import Goods2 from './components/goods2'


function App() {
  return (
    <div className="main">
      <Header></Header>
      <MainBanner></MainBanner>
      <Goods2></Goods2>
    </div>
  );
}

export default App;
