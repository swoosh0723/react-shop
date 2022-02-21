import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const GoodsWrapper = styled(Link)`
  text-decoration: none;
  color: black;
`

const ThumbnailBox = styled.div`
  position:relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
`

const Thumbnail = styled.img.attrs({

  alt: '제품 이미지'
})`

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

const Information = styled.div`
  display: grid;
  grid-template-areas: 
    'brand brand'
    'name name'
    'price rate';
  gap: 4px 0;
  width: 100%;
  padding-right: 10px;
  margin-top: 10px;
  box-sizing: border-box;
`

const Brand = styled.strong`
  grid-area: brand;
  font-size: 12px;
`

const Name = styled.div`
  grid-area: name;
  font-size: 12px;
`

const Price = styled.span`
  grid-area: price;
  font-size: 12px;
  font-weight: 700;
`

const Rate = styled.em`
  grid-area: rate;
  margin-left: auto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: red;
`

function Goods2(props) {
  return (
    <GoodsWrapper to="/">
      <ThumbnailBox>
        <Thumbnail src={props.goods.image}></Thumbnail>
      </ThumbnailBox>

      <Information>
        <Brand>{props.goods.brand}</Brand>
        <Name>{props.goods.name}</Name>
        <Price>{props.goods.price}원</Price>
        <Rate>{props.goods.rate}</Rate>
      </Information>
    </GoodsWrapper>
  )

}

export default Goods2