
import { useState } from 'react';
import './App.css';

import dataGoods from './data/dataGoods2.json'

import Header from './components/header'
import MainBanner from './components/mainBanner'
import GoodsList from './components/goodsList'

function App() {
  const [goods, goodsChange] = useState(dataGoods);


  return (
    <div className="main">
      <Header></Header>
      <MainBanner></MainBanner>
      <GoodsList
        goods={goods}
      >
      </GoodsList>
    </div>
  );
}

export default App;
