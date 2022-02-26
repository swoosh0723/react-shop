import React from 'react'
import styled from 'styled-components'
import { connect, useDispatch, useSelector } from 'react-redux'

const Table = styled.table`
  width: 100%;
  background-color: pink;
  text-align: center;
`

function Cart(props) {
  const cartData = useSelector((state) => state.reducer)
  console.log(cartData)

  const dispatchTest = useDispatch();

  return (
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
  )
}

// function cartData(cartData) {
//   return {
//     cartData: cartData.reducer
//   }
// }

// export default connect(cartData)(Cart)

export default Cart

