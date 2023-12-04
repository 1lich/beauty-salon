import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderStyled = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
`
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
export const StyledLink = styled(Link)`
  color: white;
  font-family: Cormorant Garamond;
  font-size: 30px;
  font-weight: 400;
  padding: 50px;
  text-decoration: none;
`
export const StyledIcon = styled.svg`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  color: white;
  margin-top: 1rem;
  padding: 50px;
`
