
import { useState } from 'react';
import './App.css';

import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import dataGoods from './dataGoods'

import Header from './components/header'
import MainBanner from './components/mainBanner'
import GoodsList from './components/goodsList'
import GoodsDetail2 from './components/goodsDetail2'
import Loading from './components/loading'


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

  const goodsNumber = goods.length - 1;
  const detailRandom = Math.round(Math.random() * goodsNumber)

  console.log(goodsNumber)
  console.log(detailRandom)


  return (
    <div className="main">
      <Header
        detailRandom={detailRandom}
      ></Header>

      <Switch>
        {/* Main */}
        <Route exact path="/">
          <MainBanner></MainBanner>

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
        </Route>

        {/* detail */}
        <Route exact path="/detail/:id">
          <GoodsDetail2
            goods={goods}
          >
          </GoodsDetail2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
