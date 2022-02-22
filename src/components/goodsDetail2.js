import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
  display: flex;
  align-items: center;
  min-width: 155px;
  height: 25px;
  font-size: 12px;
  font-size: 700;

  span {
    font-size: ${({ stockCount }) => stockCount > 0 ? '12px' : '16px'};
    font-weight: 700;
    color: ${({ stockCount }) => stockCount > 0 ? '#0078ff' : 'red'};
  }
`

const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 10px;
  width: 100%;
  padding: 0 15px;
  margin: 30px 0;
  box-sizing: border-box;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.primary ? "#0078ff" : "#ccc"};
  font-size: 16px;
  color: ${props => props.primary ? "white" : "black"};
`

function GoodsDetail(props) {
  const history = useHistory();
  const { id } = useParams();

  const item = props.goods.find((goodsItem) => {
    return goodsItem.id == id
  })

  const [stockCount, stockCountChange] = useState(item.stock)
  const [orderText, orderTextChange] = useState('구매하기')

  function order() {
    stockCount > 1
      ? stockCountChange(stockCount - 1)
      : stockCountChange('재고가 없습니다')
      || orderTextChange('품절')

    // if (stockCount > 1) {
    //   stockCountChange(stockCount - 1)
    // } else {
    //   stockCountChange('재고가 없습니다')
    //   orderTextChange('품절')
    // }
  }


  function historyBack() {
    // history.push('/')
    history.push('/');
  }


  return (
    <>
      <DetialWrapper>
        <ThumbnailBox>
          <Thumbnail
            src={item.image}
          >
          </Thumbnail>
        </ThumbnailBox>

        <Information>
          <Brand>{item.brand}</Brand>
          <Name>{item.name}</Name>
          <Price>{item.price}</Price>
          <Rate>{item.rate}</Rate>
          <Stock stockCount={stockCount}>
            재고:&nbsp;<span>{stockCount}</span>
          </Stock>
        </Information>
      </DetialWrapper>

      <ButtonBox>
        <Button
          onClick={historyBack}
        >
          홈으로
        </Button>
        <Button
          primary
          stockCount={stockCount}
          orderText={orderText}
          onClick={order}
        >
          {orderText}
        </Button>
      </ButtonBox>
    </>
  )

}

export default GoodsDetail