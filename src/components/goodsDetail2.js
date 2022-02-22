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

const Information = styled.div`
  display: grid;
  grid-template-columns: 
    'brand brand'
    'name name'
    'price rate'
    ;
  width: 100%;
`

const Brand = styled.div`
  width: 100%;
  font-size: 12px;
  color: gray;
`

const Name = styled.strong`
  font-size: 16px;
`

const Price = styled.span`
  font-size:14px;
`

const Rate = styled.em`
  font-size: 12px;
  font-style: normal;
  color: red;
`

const ButtonBox = styled.div`
  width: 100%;
  padding: 0 15px;
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
    "Noto Sans KR", helvetica, Gulim, sans-serif;
  font-size: 16px;
  color: white;
`

function GoodsDetail(props) {
  return (
    <>
      <DetialWrapper>
        <ThumbnailBox>
          이미지
        </ThumbnailBox>

        <Information>
          <Brand>브랜드</Brand>
          <Name>네임</Name>
          <Price>10000</Price>
          <Rate>15%</Rate>
        </Information>
      </DetialWrapper>

      <ButtonBox>
        <Button>구매하기</Button>
      </ButtonBox>
    </>
  )

}

export default GoodsDetail