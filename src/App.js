import { useState, Component } from 'react';
import './App.css';
import shoesData from './dataShoes'
import goodsData from './dataGoods'
import Goods from './components/goods'

function App() {
  const [shoes, shoesChange] = useState(shoesData);
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
                goodsId={item.id}
                goodsImage={item.image}
                goodsBrand={item.brand}
                goodsName={item.name}
                goodsPrice={item.price}
                goodsRate={item.rate}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
