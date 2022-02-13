import { useState, Component } from 'react';
import './App.css';
import goodsData from './dataGoods'
import Goods from './components/goods'

function App() {
  const [goods, goodsChange] = useState(goodsData);

  return (
    <div className="App">
      <div className="mainBanner">
        Main Banner
      </div>

      <div className="container">
        {
          goods.map((item) => {
            return (
              <Goods
                goods={item}
              />
            )
          })
        }
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div className="item">
      {props.goodsBrand}
    </div>
  )
}

export default App;
