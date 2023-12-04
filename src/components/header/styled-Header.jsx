import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
  height: 70px;
  margin-bottom: -70px;
  margin-left: 20vw;
  width: 60vw;
`
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
`
export const StyledLink = styled(Link)`
  color: white;
  font-family: Cormorant Garamond;
  font-size: 30px;
  font-weight: 400;
  padding: 30px;
`
export const StyledIcon = styled.svg`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  color: white;
`

export const StyledInstLink = styled.a`
  &:hover {
    background-color: orange;
    color: black;
  }
`
