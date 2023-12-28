import { ReactComponent as MySVG } from "../../assets/icons/Vector.svg"
import {
  HeaderDiv,
  HeaderStyled,
  StyledLink,
  StyledIcon,
  CenterDiv,
} from "./styled-Header"

const Header = () => {
  return (
    <HeaderStyled>
      <CenterDiv>
        <HeaderDiv>
          <StyledLink to="/">ГЛАВНАЯ</StyledLink>
          <StyledLink to="/staff">МАСТЕРА</StyledLink>
          <StyledLink to="/services">УСЛУГИ</StyledLink>
        </HeaderDiv>
        <StyledIcon>
          <MySVG />
        </StyledIcon>
        <HeaderDiv>
          <StyledLink to="/prices">ЦЕНЫ</StyledLink>
          <StyledLink to="/works">РАБОТЫ</StyledLink>
          <StyledLink to="/contacts">КОНТАКТЫ</StyledLink>
        </HeaderDiv>
      </CenterDiv>
    </HeaderStyled>
  )
}

export default Header
