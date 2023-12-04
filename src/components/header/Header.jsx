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
          <StyledLink to="/">Главная</StyledLink>
          <StyledLink to="/staff">Мастера</StyledLink>
          <StyledLink to="/services">Услуги</StyledLink>
        </HeaderDiv>
        <StyledIcon>
          <MySVG />
        </StyledIcon>
        <HeaderDiv>
          <StyledLink to="/price">Цены</StyledLink>
          <StyledLink to="/works">Работы</StyledLink>
          <StyledLink to="/contacts">Контакты</StyledLink>
        </HeaderDiv>
      </CenterDiv>
    </HeaderStyled>
  )
}

export default Header
