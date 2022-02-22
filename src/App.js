
import { useState } from 'react';
import './App.css';

import dataGoods from './dataGoods'

import Header from './components/header'
import MainBanner from './components/mainBanner'
import GoodsList from './components/goodsList'
import GoodsDetail2 from './components/goodsDetail2'
import Loading from './components/loading'

import axios from 'axios';

function App() {
  const [goods, goodsChange] = useState(dataGoods);
  const [loading, loadingChange] = useState(false)

  // 상품 더보기
  function moreGoods() {
    axios.get('./dataGoods2.json')
      .then((result) => {

        const goodsMore = [
          ...goods,
          ...result.data
        ];

        goodsChange(goodsMore)
      })
      .catch(() => {
        loadingChange(true)
      })
  }


  return (
    <div className="main">
      <Header></Header>
      <MainBanner></MainBanner>

      <GoodsDetail2></GoodsDetail2>
      <GoodsList
        goods={goods}
        moreGoods={moreGoods}
      >
      </GoodsList>

      {

        loading
          ? <Loading></Loading>
          : null
      }
    </div>
  );
}

export default App;
