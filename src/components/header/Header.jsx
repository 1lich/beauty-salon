import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import { ReactComponent as MySVG } from "../../assets/icons/Vector.svg"
import {
  HeaderDiv,
  HeaderStyled,
  StyledLink,
  StyledIcon,
  StyledInstLink,
  CenterDiv,
} from "./styled-Header"

const Header = () => {
  return (
    <HeaderStyled>
      <CenterDiv>
        <StyledInstLink>
          <StyledIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledIcon>
        </StyledInstLink>
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
