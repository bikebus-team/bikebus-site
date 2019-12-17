import React from "react"
import {
  QuoteBlockContainer,
  QuoteBlockContentContainer,
  QuoteBlockQuote,
  QuoteBlockName,
  TextContainer}
  from "./QuoteBlockStyles"


const QuoteBlock = ({ quote, speaker }) => (
  <QuoteBlockContainer>
    <QuoteBlockContentContainer>
        <TextContainer>
        <QuoteBlockQuote>{quote}</QuoteBlockQuote>
        <QuoteBlockName>- {speaker}</QuoteBlockName>
        </TextContainer>
    </QuoteBlockContentContainer>
  </QuoteBlockContainer>

)

export default QuoteBlock
