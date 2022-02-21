import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Goods2 from './goods2'

const List = styled.div`
  display: grid;
  grid-template-columns: ${props => props.viewType};
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

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  padding: 0;
  margin: 40px auto;
  border: none;
  border-radius: 4px;
  background-color: #0078ff;
  font-family: Musinsa, "-apple-system", "Apple SD Gothic Neo", Roboto,
    "Noto Sans KR", helvetica, Gulim, sans-serif;
  font-size: 14px;
  color: white;
`


function GoodsList(props) {

  const [goodsCount, goodsCountChange] = useState(props.goods.length)

  const columnSize = '1fr'
  const [colmunCount, colmunCountChange] = useState(2)


  const columnTemplate = (columnSize + ' ').repeat(colmunCount)
  const [viewType, viewTypeChange] = useState(columnTemplate);

  function viewTypeToggle() {
    // viewType === '1fr 1fr'
    //   ? viewTypeChange('1fr 1fr 1fr')
    //   : viewType === '1fr 1fr 1fr'
    //     ? viewTypeChange('1fr')
    //     : viewTypeChange('1fr 1fr')


    colmunCount === 2
      ? colmunCountChange(3)
      : colmunCount === 3
        ? colmunCountChange(1)
        : colmunCountChange(2)

    viewTypeChange(columnTemplate)
  }

  return (
    <>
      <UtilBar>
        <Count>
          상품 수: {goodsCount}개
        </Count>

        <ViewButton
          type="button"
          onClick={viewTypeToggle}
        >
          보기방식 토글 버튼
        </ViewButton>
      </UtilBar>
      <List
        viewType={viewType}
      >
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

      <MoreButton
        type="button"
        onClick={() => { console.log(321) }}
      >
        더보기
      </MoreButton>
    </>
  )
}

export default GoodsList