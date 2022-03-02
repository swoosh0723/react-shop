import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect, useDispatch, useSelector } from 'react-redux'

const Table = styled.table`
  width: 100%;
  background-color: pink;
  text-align: center;
`

const Tab = styled.button`
  width: 150px;
  background-color: #ccc;
`

function Cart(props) {
  const cartData = useSelector((state) => state.reducer)

  const dispatchTest = useDispatch();

  const [tab, tabChange] = useState([
    {
      type: 'info',
      name: '상품정보탭'
    },
    {
      type: 'shipping',
      name: '배송관련탭'
    },
    {
      type: 'return',
      name: '환불탭'
    },
  ])

  const [contents, setContents] = useState(
    {
      info: <p>상품정보</p>,
      shipping: <p>배송관련</p>,
      return: <p>환불</p>
    }
  )

  const [state, setState] = useState('shipping')

  const [count, setCount] = useState(0)
  const [age, setAge] = useState(20)

  function ageTest() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count !== 0 && count < 3) {
      setAge(age + 1)
    }
  }, [count])


  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            cartData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button
                      onClick={() => {
                        // 데이터 수정 요청을 할ㄷ 때
                        dispatchTest({ type: 'plus', data: item.id })
                      }}
                    >
                      +
                    </button>

                    <button
                      onClick={() => {
                        dispatchTest({ type: 'minus', data: item.id })
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      {
        tab.map((item, index) => {
          return (
            <Tab
              key={index}
              onClick={() => {
                setState(item.type)
              }}
            >
              {item.name}
            </Tab>
          )
        })
      }

      <Information
        contents={contents}
        state={state}
        setState={setState}
      ></Information>

      <p>테스트!!! async</p>

      <div>
        <div>
          안녕하세요 저는 {age}
        </div>
        <button
          onClick={ageTest}
        >누르면 한살 추가</button>
      </div>
    </>
  )
}

function Information(props) {
  return (
    <div
      onClick={() => {
        props.setState('return')
      }}
    >
      {
        props.contents[props.state]
      }
    </div>
  )
}

// function cartData(cartData) {
//   return {
//     cartData: cartData.reducer
//   }
// }

// export default connect(cartData)(Cart)

export default Cart

