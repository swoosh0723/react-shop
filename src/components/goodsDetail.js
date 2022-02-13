import { useState } from 'react';

function GoodsDetail() {
  return (
    <div className="goodsDetail">
      <div className="goodsDetail__thumbnail">
        <img
          src="https://image.msscdn.net/images/goods_img/20210201/1771542/1771542_1_500.jpg"
          alt=""
        />
      </div>

      <div className="goodsDetail__information">
        <h4 className="goodsDetail__name">
          상품명
        </h4>

        <span className="goodsDetail__brand">
          상품 브랜드
        </span>

        <em className="goodsDetail__price">
          100000원
        </em>

        <em className="goodsDetail__rate">
          30%
        </em>
      </div>

      <div className="goodsDetail__button">
        <button
          type="button"
          className="goodsDetail__button__cart"
        >
          장바구니
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