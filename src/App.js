import { useState } from 'react';
import './App.css';
import shoesData from './dataShoes'

function App() {
  const [shoes, shoesChange] = useState(shoesData);

  return (
    <div className="App">
      <div className="mainBanner">
        Main Banner
      </div>
      {
        console.log({ shoes })
      }

      <div className="container">
        <div className="goods">
          <div className="goodsThumbnail">
            <img
              src="https://image.msscdn.net/images/goods_img/20200918/1611805/1611805_1_500.jpg"
              alt=""
            >
            </img>
          </div>
          <div className="goodsInformation">

            <span className="goodsBrand">
              무신사 스탠다드
            </span>

            <strong className="goodsName">
              {shoes[0].title}

            </strong>

            <em className="goodsPrice">
              229,500원
            </em>

            <em className="goodsRate">
              25%
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
