import styled from "styled-components"
import { ComponentWrapper } from "../Base/basecomponents"

export const QuoteBlockContentContainer = styled.div`
  position: relative
`
export const QuoteBlockQuote = styled.h1`
  color: white;
  text-align: left;
  display: inline-flex;
  max-width: 700px;
  ::before {
    content: open-quote;
    display: inline-flex;
    font-size: 110px;
    position: relative;
    top: -80px;
    left: -50px;
    color: white;
  }
`

export const QuoteBlockContainer = styled.div`
  text-align: center;
  padding: 125px;
  background-color:black;
  width: inherit;
  height: inherit;
`
