import styled from "styled-components"
import { ComponentWrapper } from "../Base/basecomponents"
import {BBh1, BBp} from "../Base/fonts"
import {teal} from "../Base/colors"

export const QuoteBlockContentContainer = styled.div`
  position: relative;
  text-align: center;
  width: max-content;
  margin: auto;

  @media (max-width: 955px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

`
export const QuoteBlockQuote = styled(BBh1)`
  color: white;
  text-align: left;
  display: inline-flex;
  max-width: 700px;
  margin: 0;
  ::before {
    content: open-quote;
    display: inline-flex;
    font-size: 110px;
    position: absolute;
    top: -80px;
    left: -100px;
    color: ${teal};
    font-family: Times New Roman, Sans-serif
  }
`
export const QuoteBlockContainer = styled.div`
  text-align: center;
  padding: 125px;
  background-color: black;
  width: inherit;
  height: inherit;
`

export const TextContainer = styled.div`
  text-align: left;
`
