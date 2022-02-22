import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const DetialWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`

const ThumbnailBox = styled.div`
  width: 100%;
`

const Thumbnail = styled.img.attrs({
  alt: '제품 이미지'
})`
  width: 100%;
`

const Information = styled.div`
  display: grid;
  grid-template-areas: 
    'brand brand'
    'name name'
    'price rate';
  gap: 6px 0;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
`

const Brand = styled.div`
  grid-area: brand;
  width: 100%;
  font-size: 12px;
  color: gray;
`

const Name = styled.strong`
  grid-area: name;
  font-size: 16px;
`

const Price = styled.span`
  grid-area: price;
  font-size:14px;
`

const Rate = styled.em`
  grid-area: rate;
  font-size: 12px;
  font-style: normal;
  color: red;
`

const Stock = styled.span`
  font-size: 12px;
  font-size: 700;

  span {
    color: ${({ stockCount }) => (stockCount < 3 ? 'red' : 'green')};
  }
`

const ButtonBox = styled.div`
width: 100%;
padding: 0 15px;
margin: 30px 0;
box-sizing: border-box;
`

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 40px;
border-radius: 4px;
border: 1px solid #0078ff;
background-color: #0078ff;
font-family: Musinsa, "-apple-system", "Apple SD Gothic Neo", Roboto,
  "Noto Sans KR", helvetica, Gulim, sans - serif;
font-size: 16px;
color: white;
`

function GoodsDetail(props) {
  const [stockCount, stockCountChange] = useState(3)

  function order() {
    stockCount > 1
      ? stockCountChange(stockCount - 1)
      : stockCountChange('재고없음')
  }

  return (
    <>
      <DetialWrapper>
        <ThumbnailBox>
          <Thumbnail
            src={props.goods[0].image}
          >
          </Thumbnail>
        </ThumbnailBox>

        <Information>
          <Brand>{props.goods[0].brand}</Brand>
          <Name>{props.goods[0].name}</Name>
          <Price>{props.goods[0].price}</Price>
          <Rate>{props.goods[0].rate}</Rate>
          <Stock>
            재고: <span>{stockCount}</span>
          </Stock>
        </Information>
      </DetialWrapper>

      <ButtonBox>
        <Button
          stockCount={stockCount}
          onClick={order}
        >
          구매하기
        </Button>
      </ButtonBox>
    </>
  )

}

export default GoodsDetail