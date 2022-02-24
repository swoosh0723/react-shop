
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import dataGoods from './dataGoods'

import Header from './components/header'
import MainBanner from './components/mainBanner'
import GoodsList from './components/goodsList'
import GoodsDetail2 from './components/goodsDetail2'
import Loading from './components/loading'

const stockContext = React.createContext();


function App() {

  const [goods, goodsChange] = useState(dataGoods);
  const [loading, loadingChange] = useState(false)
  const [moreButtonShow, moreButtonShowChange] = useState(true)

  const [stockText, stockTextChange] = useState([10, 11, 12])

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

    moreButtonShowChange(false)
  }

  // goods의 총합
  const goodsTotal = goods.length
  // goods id값 랜덤
  const detailRandom = Math.round(Math.random() * (goodsTotal - 1))

  return (
    <div className="main">
      <Header
        detailRandom={detailRandom}
      ></Header>

      <Switch>
        {/* Main */}
        <Route exact path="/">
          <MainBanner></MainBanner>

          <stockContext.Provider value={stockText}>
            <GoodsList
              goods={goods}
              goodsTotal={goodsTotal}
              moreGoods={moreGoods}
              moreButtonShow={moreButtonShow}
            >
            </GoodsList>
          </stockContext.Provider>

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
