import React from 'react'
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eee;
`;

const Title = styled.h4`
  display: flex;
  align-items: center;
  ustify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
`;

function GoodsDetail(props) {
  const { id } = useParams();

  const goodsId = props.goods.find((item) => {
    return item.id == id
  });

  const history = useHistory();

  return (
    <div className="goodsDetail">
      <Box>
        <Title>상세페이지</Title>
      </Box>

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