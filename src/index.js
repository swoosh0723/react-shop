import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dataCart from './dataCart'

import { HashRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';


const basicState = dataCart;

function reducer(state = basicState, action) {
  if (action.type === 'addCart') {

    const found = state.findIndex((e) => {
      return e.id === action.data.id
    })

    if (found >= 0) {
      const copyItem = [...state]
      copyItem[found].stock++
      return copyItem;

    } else {
      const addCartItem = [...state]

      addCartItem.push(action.data)

      return addCartItem;
    }

  } else if (action.type === 'plus') {
    const statePlus = [...state]
    statePlus[action.data].stock++

    return statePlus;

  } else if (action.type === 'minus') {
    const stateMinus = [...state]
    stateMinus[action.data].stock--

    return stateMinus;

  } else {
    return state;
  }

}

// state = 어쩌구 저쩌구 ES6 문법
// basicState 데이터 초기값
// function reducer(state = basicState, action) {
//   if (action.type === 'addCart') {
//     const addCartItem = [...state]
//     addCartItem.push(action.payload);

//     return addCartItem

//   } else if (action.type === 'plus') {
//     const statePlus = [...state]
//     statePlus[0].stock++

//     return statePlus
//   } else if (action.type === 'minus') {
//     const stateMinus = [...state]

//     if (stateMinus[0].stock > 0) {
//       stateMinus[0].stock--
//       // stateMinus[0].stock = stateMinus[0].stock - 1;
//     }

//     return stateMinus
//   }

//   else {
//     return state
//   }
// }

const basicState2 = true;

function reducer2(state = basicState2, action) {
  return state;
}

// const store = createStore(combineReducers({ reducer, reducer2 }));
const store = createStore(combineReducers({ reducer, reducer2 }))


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
