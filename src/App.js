import { useState, Component } from 'react';
import './App.css';
import goodsData from './dataGoods'
import Goods from './components/goods'
import GoodsDetail from './components/goodsDetail'

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  const [goods, goodsChange] = useState(goodsData);

  return (
    <div className="App">
      <header>
        <div className="header__logo">
          React-Shop
        </div>
        <div className="headner__gnb">
          <a
            title="Home"
          >
            <Link to="/">
              Home
            </Link>
          </a>
          <a
            title="Detail"
          >
            <Link to="/detail">
              Detail
            </Link>
          </a>
        </div>
      </header>



      {/* 
        exact 경로가 정확히 일치할때
      */}
      <Route exact path="/">
        <div className="mainBanner">
          Main Banner
        </div>

        <div className="container">
          {
            goods.map((item, i) => {
              return (
                <Goods
                  goods={item}
                />
              )
            })
          }
        </div>
      </Route>

      <Route path="/detail">
        <GoodsDetail />
      </Route>


    </div>
  );
}

export default App;
