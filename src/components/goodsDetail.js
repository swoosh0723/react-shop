import React from 'react'
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

function GoodsDetail(props) {
  const { id } = useParams();

  const goodsId = props.goods.find((item) => {
    return item.id == id
  });

  console.log({ id })

  const history = useHistory();

  return (
    <div className="goodsDetail">
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