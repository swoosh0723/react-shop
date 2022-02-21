import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Goods2 from './goods2'

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 12px;
  width: 100%;
  padding: 0 15px;
  margin-top: 24px;
  box-sizing: border-box;
`

const UtilBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: black;
`

const Count = styled.span`
  font-size: 12px;
  color: white;
`

const ViewButton = styled.button`
  height: 30px;
  margin-left: auto;
  border: 1px solid white;
  background-color: transparent;
  color: white;
`


function GoodsList(props) {

  const [goodsCount, goodsCountChange] = useState(props.goods.length)

  function Babo() {
    console.log(3123)
  }

  return (
    <>
      <UtilBar>
        <Count>
          상품 수: {goodsCount}개
        </Count>

        <ViewButton
          type="button"
          onClick={Babo}
        >
          보기방식 변경
        </ViewButton>
      </UtilBar>
      <List>
        {
          props.goods.map((item, i) => {
            return (
              <Goods2
                key={i}
                goods={item}
              ></Goods2>
            )
          })
        }
      </List>
    </>
  )
}

export default GoodsList