import styled from "styled-components"

export const StyledFooter = styled.footer`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-left: 20vw;
  width: 60vw;
`
export const FooterDiv = styled.div`
  margin-top: 4rem;
  height: 200px;
`
export const FooterH1 = styled.h1`
  font-family: Garamond;
  font-size: 30px;
  font-weight: 700;
`
export const StyledLink = styled.a`
  padding-top: 3rem;
  margin-left: -1rem;
`

export const StyledParagraph = styled.p`
  padding-top: 2rem;
  font-family: Cormorant Garamond;
  font-weight: 400;
  font-size: 23px;
`
export const StyledIcon = styled.svg`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  color: white;
  padding: 1rem;
  &:hover {
    background-color: orange;
    color: black;
    cursor: pointer;
  }
`
