import { Link } from "react-router-dom"

import { HeaderDiv, HeaderStyled } from "./styled-Header"

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <HeaderDiv>1</HeaderDiv>
      </Link>
      <Link to="staff">
        <HeaderDiv>2</HeaderDiv>
      </Link>
    </HeaderStyled>
  )
}

export default Header
