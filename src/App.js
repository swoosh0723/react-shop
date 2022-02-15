import { useState } from 'react';
import './App.css';
import goodsData from './dataGoods'
import Goods from './components/goods'
import GoodsDetail from './components/goodsDetail'

import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {

  // useState components에서 사용가능
  // App.js 에서 props로 내려주는것이 국룰
  // 왜냐 데이터는 항상 위에서 아래로 흘러야한다
  const [goods, goodsChange] = useState(goodsData);

  return (
    <div className="App">
      <header>
        <div className="header__logo">
          React-Shop
        </div>
        <div className="headner__gnb">
          <Link as={Link} to="/">
            Home
          </Link>
          <Link as={Link} to="/detail">
            Detail
          </Link>
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
            <img
              src="https://image.msscdn.net/display/images/2021/11/15/adedce4cfd46476ca932a93150fada32.jpg?1644910200000"
            />
          </div>

          <div className="container">
            <div className="goodsList">
              {
                goods.map((item, i) => {
                  return (
                    <Goods
                      key={i}
                      goods={item}
                    />
                  )
                })
              }
            </div>

            <button
              type="button"
              className="goodsButtonMore"
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <GoodsDetail
            goods={goods}
          />
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
