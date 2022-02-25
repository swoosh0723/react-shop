import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const basicState = [
  {
    id: 0,
    name: 'nike 슈즈1',
    stock: 2
  },
  {
    id: 1,
    name: 'nike 슈즈2',
    stock: 3
  },
  {
    id: 2,
    name: 'nike 슈즈3',
    stock: 5
  },
  {
    id: 3,
    name: 'nike 슈즈4',
    stock: 6
  },
]

// state = 어쩌구 저쩌구 ES6 문법
// basicState 데이터 초기값
function reducer(state = basicState, action) {
  if (action.type === 'plus') {
    const statePlus = [...state]
    statePlus[0].stock++

    return statePlus
  } else if (action.type === 'minus') {
    const stateMinus = [...state]

    if (stateMinus[0].stock > 0) {
      stateMinus[0].stock--
      // stateMinus[0].stock = stateMinus[0].stock - 1;
    }
    return stateMinus
  }

  else {
    return state
  }
}

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* 
      BrowserRouter vs HashRouter
      차이는? 
      HashRouter: 라우팅 안전하게 할 수 있게 도와줌. 리액트에게 요청
      BrowserRouter: 서버에게 요청
    */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
