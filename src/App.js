import { useState } from 'react';
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
            href="#none"
            title="Home"
          >
            <Link to="/">
              Home
            </Link>
          </a>
          <a
            href="#none"
            title="Detail"
          >
            <Link to="/detail">
              Detail
            </Link>
          </a>
        </div>
      </header>

      {/* 
        Switch 
        여러개 Route가 매칭 되어도 맨 위의 Route 하나만 보여줍니다
      */}
      <Switch>
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


        <Route path="/:id">
          <div>
            아무거나 적었을때 이거 보여주세요
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
