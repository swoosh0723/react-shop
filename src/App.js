import { useState, Component } from 'react';
import './App.css';
import shoesData from './dataShoes'
import Goods from './components/goods'

function App() {
  const [shoes, shoesChange] = useState(shoesData);

  return (
    <div className="App">
      <div className="mainBanner">
        Main Banner
      </div>

      <div className="container">
        <Goods
          shoesBrand={shoes[0].brand}
          shoesName={shoes[0].name}
          shoesPrice={shoes[0].price}
          shoesRate={shoes[0].rate}
        />
      </div>
    </div>
  );
}

export default App;
