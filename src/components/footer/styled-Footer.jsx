import styled from "styled-components"

export const StyledFooter = styled.footer`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: fixed;

  border-top: 1px solid white;
`
export const FooterDiv = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`
export const FooterH1 = styled.h1`
  font-family: Roboto Mono;
  font-weight: 500;
  font-size: 24px;
  margin-top: 0;
`
export const StyledLink = styled.a`
  padding-top: 3rem;
  margin-left: -1rem;
`

export const StyledParagraph = styled.p`
  padding-top: 0.5rem;
  font-family: Roboto Mono;
  font-size: 14px;
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
