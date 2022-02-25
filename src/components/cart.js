import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Table = styled.table`
  width: 100%;
  background-color: pink;
  text-align: center;
`

function Cart(props) {
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
          props.cartData.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>
                  <button
                    onClick={() => {
                      // 데이터 수정 요청을 할ㄷ 때
                      props.dispatch({ type: 'plus', payload: { name: 'kim' } })
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => {
                      props.dispatch({ type: 'minus' })
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

function test123(cartData) {
  return {
    cartData: cartData.reducer
  }
}

export default connect(test123)(Cart)


// export default Cart

