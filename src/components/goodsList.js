import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Goods2 from './goods2'

import { stockContext } from '../App';



const List = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${props => props.column};
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 8px 12px;
  width: 100%;
  padding: 0 15px;
  margin: 24px 0 40px;
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
  display: block;
  padding: 6px;
  font-size: 12px;
  font-weight: 700;
  color: black;
  background-color: pink;
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
  margin: 0 auto 40px;
  border: none;
  border-radius: 4px;
  background-color: #0078ff;
  font-family: Musinsa, "-apple-system", "Apple SD Gothic Neo", Roboto,
    "Noto Sans KR", helvetica, Gulim, sans-serif;
  font-size: 14px;
  color: white;
`

function GoodsList(props) {
  const [repeatCount, repeatCountChange] = useState(2);
  const column = 'repeat(' + repeatCount + ', 1fr)';

  const test = useContext(stockContext);

  console.log(test)

  function viewTypeToggle() {
    // 첫번째! 노가다
    // viewType === '1fr 1fr'
    //   ? viewTypeChange('1fr 1fr 1fr')
    //   : viewType === '1fr 1fr 1fr'
    //     ? viewTypeChange('1fr')
    //     : viewTypeChange('1fr 1fr')

    // 두번째!
    // 첫번째에서 변수만 받아서 하는 수준 덕분에 repeat() 학습
    // columnCount === 2
    //   ? columnCountChange(3)
    //   : columnCount === 3
    //     ? columnCountChange(1)
    //     : columnCountChange(2)

    // viewTypeChange(columnTemplate)

    // 세번째 완성인덧?
    // if (repeatCount === 3) {
    //   repeatCountChange(1)
    // } else {
    //   repeatCountChange(repeatCount + 1);
    // }

    // 세번째 삼항 조건 연산자로
    repeatCount === 3
      ? repeatCountChange(1)
      : repeatCountChange(repeatCount + 1);
  }


  useEffect(() => {
    console.log(column)
  }, [column]);

  return (
    <>
      <UtilBar>
        <Count>
          상품 수: {props.goodsTotal}개
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

      {
        props.moreButtonShow
          ? <MoreButton
            type="button"
            onClick={props.moreGoods}
          >
            더보기
          </MoreButton>
          : null
      }
    </>
  )
}

export default GoodsList