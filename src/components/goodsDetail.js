import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Link, Route, Switch } from 'react-router-dom';

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
  useEffect(() => {
    // 컴포넌트가 mount 되었을때
    // 컴포넌트가 update 될 때
    // 특정 코드를 실행할 수 있음
    // useEffect는 여러개 사용가능
    // 위에서 아래로 순서대로 실행


    const timer = setTimeout(() => {
      console.log(321321321);

    }, 2000)

    return function test() {
      // 사라질때 실행할 코드
    }
  });

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

      <div className="goodsDetail__alert">
        재고가 얼마 남지 않았습니다
      </div>

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
      </div>

      <div className="goodsDetail__button">
        <button
          type="button"
          className="goodsDetail__button__cart"
          onClick={() => {
            // history.goBack()
            history.push('./')
          }}
        >
          뒤로가기
        </button>

        <button
          type="button"
          className="goodsDetail__button__order"
        >
          주문하기
        </button>
      </div>
    </div>
  )
}

export default GoodsDetail