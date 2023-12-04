import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import {
  StyledFooter,
  StyledLink,
  FooterDiv,
  FooterH1,
  StyledParagraph,
  StyledIcon,
} from "./styled-Footer"

const Footer = () => {
  return (
    <StyledFooter>
      <FooterDiv>
        <FooterH1>Контакты</FooterH1>
        <StyledParagraph>+7 (911) 123-45-67</StyledParagraph>
        <StyledParagraph>
          Новоостровский проспект, дом 36 лит. С
        </StyledParagraph>
      </FooterDiv>
      <FooterDiv>
        <FooterH1>Режим Работы</FooterH1>
        <StyledParagraph>C 10:00 до 21:00 (Пн-Пт)</StyledParagraph>
        <StyledParagraph>С 11:00 до 20:00 (Сб-Вс)</StyledParagraph>
      </FooterDiv>
      <FooterDiv>
        <FooterH1>Мы в интернете</FooterH1>
        <StyledLink>
          <StyledIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledIcon>
        </StyledLink>
        <StyledLink>
          <StyledIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledIcon>
        </StyledLink>
        <StyledLink>
          <StyledIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledIcon>
        </StyledLink>
        <StyledLink>
          <StyledIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledIcon>
        </StyledLink>
      </FooterDiv>
    </StyledFooter>
  )
}

export default Footer
