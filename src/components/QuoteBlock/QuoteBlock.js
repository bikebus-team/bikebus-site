import React from "react"
import { Button, Link } from "../Base/basecomponents"
import {
  QuoteBlockContainer,
  QuoteBlockContentContainer,
  QuoteBlockQuote}
  from "./QuoteBlockStyles"


const QuoteBlock = ({ quote }) => (
  <QuoteBlockContainer>
    <QuoteBlockContentContainer>
      <QuoteBlockQuote>{quote}</QuoteBlockQuote>
    </QuoteBlockContentContainer>
  </QuoteBlockContainer>

)

export default QuoteBlock
