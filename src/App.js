
import { useState } from 'react';
import './App.css';
import Header from './components/header'
import MainBanner from './components/mainBanner'


function App() {
  return (
    <div className="main">
      <Header></Header>
      <MainBanner></MainBanner>
    </div>
  );
}

export default App;
