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
  const [loading, loadingChange] = useState(true);
  const [stock, stockChange] = useState([10, 11, 12])

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


            {
              loading
                ? console.log("로딩로딩")
                : <Loading ></Loading>
            }

            <button
              type="button"
              className="goodsButtonMore"
              onClick={() => {
                // Ajax 호출 하는법
                // 성공하면 then()
                // 실패하면 catch()

                // fetch도 사용하나 호환성이 안좋음
                // axios는 이쁘게 Object로 바꿔줌
                // 그래서 axios사용


                // post로 보내는법 예제 코드
                // axios.post('서버URL', { id: 'swoosh0723', pw: 1234 }).then();

                // 로딩중이라는 UI 보이게
                loadingChange(false);

                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    // 로딩중이라는 UI 안보이게
                    loadingChange(true);

                    // data요청완료!
                    console.log(result.data)

                    // ...은 deepcopy
                    // array를 벗기고 복사 후 다시 [] array에 넣는것 [...goods]
                    const addGoods = [
                      ...goods,
                      ...result.data
                    ];
                    goodsChange(addGoods)
                  })
                  .catch(() => {
                    // 로딩중이라는 UI 안보이게
                    loadingChange(true);

                    console.log('실패임')
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <GoodsDetail
            goods={goods}
            stock={stock}
            stockChange={stockChange}
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

// Ajax
// 서버에 '새로고침 없이' 요청을 할 수 있게 도와줌

// 요청은 여러 종류가 있는데
// GET요청: 특정페이지/자료읽기
// POST요청: 서버로 중요 정보 전달

// jQuery 설치해서 $.ajax()
// axios 설치해서 axios.get()
// vallia javascript fetch()


function Loading() {
  return (
    <div className="loading">
      !!!로딩중입니다!!!
    </div>
  )
}