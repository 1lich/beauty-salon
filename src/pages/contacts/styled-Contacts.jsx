import styled from "styled-components"
import { Map } from "@pbe/react-yandex-maps"

export const StyledH1 = styled.h1`
  text-align: center;
`

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledMap = styled(Map)`
  width: 60vw;
  height: 30vw;
  margin: 5rem;
`
