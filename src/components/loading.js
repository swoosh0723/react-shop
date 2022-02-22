import styled from 'styled-components'

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 30px;
`

function Loading() {
  return (
    <LoadingBox>
      로딩중
    </LoadingBox>
  )
}

export default Loading
