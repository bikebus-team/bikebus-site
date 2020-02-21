import styled from "styled-components"
import {BBh2, BBp} from "../Base/fonts"
import {teal, richBlack, onDark} from "../Base/colors"
import { SIZES } from "../../tokens"

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
export const QuoteBlockQuote = styled(BBh2)`
  color: white;
  text-align: left;
  display: inline-flex;
  max-width: 700px;
  margin: 0;
  text-transform: none;
  font-size: 36px;
  font-family: 'Noto Sans', sans-serif;
  
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    font-size: 28px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    font-size: 22px;
  }

  ::before {
    content: open-quote;
    display: inline-flex;
    position: absolute;
    top: -80px;
    left: -100px;
    color: ${teal};
    font-family: Times New Roman, Sans-serif;
  }

  ::after {
    content: close-quote;
    position: absolute;
    right: -75px;
    bottom: -50px;
    color: ${teal};
    font-family: Times New Roman, Sans-serif
  }

  ::before, ::after {
    font-size: 110px;

    @media (max-width: ${SIZES.BREAK_TABLET}) {
      font-size: 100px;
    }

    @media (max-width: ${SIZES.BREAK_SM}) {
      font-size: 80px;
    }
  }
`

export const QuoteBlockName = styled(BBp)`
  color: ${onDark};
  margin-top: 40px;
`

export const QuoteBlockContainer = styled.div`
  text-align: center;
  padding: 125px;
  background-color: ${richBlack};
  width: inherit;
  height: inherit;
`

export const TextContainer = styled.div`
  text-align: left;
`
