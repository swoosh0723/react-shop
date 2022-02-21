import styled from 'styled-components'

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #ccc;
  font-size:20px;
  font-weight: 700;
`

function MainBanner() {
  return (
    <Banner>
      Main Banner
    </Banner>
  )
}

export default MainBanner
