import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Goods2 from './goods2'

const List = styled.div`
  display: grid;
  grid-template-columns: ${props => props.column};
  /* grid-template-columns: repeat(3, 1fr); */
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

  // const columnSize = '1fr'
  // const [columnCount, columnCountChange] = useState(2)

  // const columnTemplate = (columnSize + ' ').repeat(columnCount)
  // const [viewType, viewTypeChange] = useState(columnTemplate);

  const [repeatCount, repeatCountChange] = useState(2);
  const column = 'repeat(' + repeatCount + ', 1fr)';

  console.log(column)

  function viewTypeToggle() {
    // viewType === '1fr 1fr'
    //   ? viewTypeChange('1fr 1fr 1fr')
    //   : viewType === '1fr 1fr 1fr'
    //     ? viewTypeChange('1fr')
    //     : viewTypeChange('1fr 1fr')


    // columnCount === 2
    //   ? columnCountChange(3)
    //   : columnCount === 3
    //     ? columnCountChange(1)
    //     : columnCountChange(2)

    // viewTypeChange(columnTemplate)

    if (repeatCount === 3) {
      repeatCountChange(1)
    } else {
      repeatCountChange(repeatCount + 1);
    }
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
        column={column}
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