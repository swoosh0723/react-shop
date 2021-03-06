import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const Box = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eee;
`;

const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.titleColor}
`;

// class GoodsDetial2 extends React.Component {
//   componentDidMount() {
//     // Ajax 같은 것 가져오기
//   }

//   componentWillUnmount() {

//   }
// }

function GoodsDetail(props) {
  const [alert, alertChange] = useState(true);
  const [inputData, inputDataChange] = useState();

  useEffect(() => {
    // 컴포넌트가 mount 되었을때
    // 컴포넌트가 update 될 때
    // 특정 코드를 실행할 수 있음
    // useEffect는 여러개 사용가능
    // 위에서 아래로 순서대로 실행
    // update될때 마다 실행됨
    // 아래 대괄호를 사용하고 useState를 입력하면 해당 useState의 값이 변경 될때만 실행되게 해주세요
    // [] 빈칸이면? 빈칸이 업데이트 되면 실행 -> 빈칸은 없다~
    // 그래서 딱 한번만 실행 하고 끝
    // useEffect에서 return은 component가 사라질때 실행되는

    // 첫로드 될때 ajax 요청 할때, 한번만! [] 괄호치기
    // axios.get().then().catch();

    const timer = setTimeout(() => {
      alertChange(false)

      console.log('!!')
    }, 2000)

    return () => {
      clearTimeout(timer);
    }
  }, [alert]);

  const { id } = useParams();

  const goodsId = props.goods.find((item) => {
    return item.id == id
  });

  const history = useHistory();

  return (
    <div className="goodsDetail">
      <Box>
        <Title
          titleColor='blue'
        >
          Detail
        </Title>
      </Box>

      {inputData}
      {/* 
        입력할때 업데이트됨 
        그래서 위 useState가 계속 실행됨
      */}
      <input
        onChange={(e) => {
          inputDataChange(e.target.value)
        }}
      />

      {
        alert === true
          ? (
            <div className="goodsDetail__alert">
              재고가 얼마 남지 않았습니다
            </div>
          )
          : null
      }

      <div className="goodsDetail__thumbnail">
        <img
          src={goodsId.image}
          alt=""
        />
      </div>

      <div className="goodsDetail__information">
        <h4 className="goodsDetail__name">
          {goodsId.name}
        </h4>

        <span className="goodsDetail__brand">
          {goodsId.brand}
        </span>

        <em className="goodsDetail__price">
          {goodsId.price}
        </em>

        <em className="goodsDetail__rate">
          {goodsId.rate}
        </em>

        <Stock stock={props.stock}></Stock>
      </div>

      <div className="goodsDetail__button">
        <button
          type="button"
          className="goodsDetail__button__cart"
          onClick={() => {
            // history.goBack()
            history.push('/')
          }}
        >
          뒤로가기
        </button>

        <button
          type="button"
          className="goodsDetail__button__order"
          onClick={() => {
            const stockOrder = [...props.stock];

            stockOrder[0] > 0
              ? stockOrder[0] = stockOrder[0] - 1
              : stockOrder[0] = 0

            props.stockChange(stockOrder)
          }}
        >
          주문하기
        </button>
      </div>
    </div>
  )
}

export default GoodsDetail

function Stock(props) {
  return (
    <p>
      재고: {props.stock[0]}
    </p>
  )
}