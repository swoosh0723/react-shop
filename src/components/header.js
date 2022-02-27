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

const Logo = styled(Link)`
  margin: 0;
  font-size: 15px;
  text-decoration: none;
  color: white;
`

const Menu = styled(Link)`
  font-size:12px;
  text-align: center;
  text-decoration: none;
  color: white;
`

function Header(props) {
  return (
    <Wrapper>
      <Logo to='/'>REACT-SHOP</Logo>
      <Menu as={Link} to="/cart">Cart</Menu>
      <Menu as={Link} to={"/detail/" + props.detailRandom}>Random Detail</Menu>
    </Wrapper >
  )
}

export default Header