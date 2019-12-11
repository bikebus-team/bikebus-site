import styled from "styled-components"
import { richBlack, pureWhite } from "./colors"

export const BBh1 = styled.h1`
  font-family: "Noto Sans Semicondensed", sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: ${({ isOnDark }) => (isOnDark ? pureWhite : richBlack)};
`

export const BBh2 = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.5em;
`

export const BBh3 = styled.h3`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.17em;
`

export const BBh4 = styled.h4`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.12em;
`

export const BBp = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 0.83em;
`

export const BBsmallp = styled.small`
  font-family: "Noto Sans", sans-serif;
  font-size: 0.6em;
`
