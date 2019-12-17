import React from "react"
import styled from "styled-components"
import { BBh1 } from "../Base/fonts"
import { Link, PaddedComponentWrapper } from "../Base/basecomponents"

export const FOFWrapper = styled(PaddedComponentWrapper)`
  display: flex;
  flex-direction: column;
  margin-top: 97px;

  @media (max-width: 975px) {
    margin-top: 76px;
  }
`
export const FOFHero = styled(BBh1)`
  font-size: 7em;
  margin: 10px 0;
`

export const FOFLink = styled(Link)`
  text-decoration: none;
`
