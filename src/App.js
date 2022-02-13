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
          goods.map((item, i) => {
            return (
              <Goods
                goods={item}
              // 또는
              // goods={goods[i]}
              // goods={goods[i] i={i}}
              // <img src={'com/image'+ (pros.i + 1) +'jpg'}/>
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
