import React from "react"
import { Button, Link } from "../Base/basecomponents"
import {
  QuoteBlockContainer,
  QuoteBlockContentContainer,
  QuoteBlockQuote,
  TextContainer}
  from "./QuoteBlockStyles"


const QuoteBlock = ({ quote }) => (
  <QuoteBlockContainer>
    <QuoteBlockContentContainer>
        <TextContainer>
        <QuoteBlockQuote>{quote}</QuoteBlockQuote>
        <p style={{color:"white"}}>-jfds;lfasldf</p>
        </TextContainer>
    </QuoteBlockContentContainer>
  </QuoteBlockContainer>

)

export default QuoteBlock
