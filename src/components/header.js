import styled from 'styled-components'
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 50px 50px;
  align-items: center;;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: black;
`

const Logo = styled.h1`
  margin: 0;
  font-size: 15px;
  color: white;
`

const Menu = styled(Link)`
  font-size:12px;
  text-align: center;
  text-decoration: none;
  color: white;
`

function Header() {
  return (
    <Wrapper>
      <Logo>REACT-SHOP</Logo>
      <Menu to="/">HOME</Menu>
      <Menu to="/detail">Detail</Menu>
    </Wrapper>
  )
}

export default Header
