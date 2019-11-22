import React from "react"
import { Button, Link } from "../Base/basecomponents"
import {
  SockContainer,
  SockContentContainer,
  SockTitle,
  SockText}
  from "./SockStyles"

const Sock = ({ title, text, buttonText, buttonLink }) => (
  <SockContainer>
    <SockContentContainer>
      <SockTitle>{title}</SockTitle>
      <SockText>{text}</SockText>
      <Link to={buttonLink}>
        <Button>{buttonText}</Button>
      </Link>
    </SockContentContainer>
  </SockContainer>

)

export default Sock
