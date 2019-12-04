import React from "react"
import { Link } from "../Base/basecomponents"
import {
  SockContainer,
  SockContentContainer,
  SockTitle,
  SockText,
  SockButton}
  from "./SockStyles"

const Sock = ({ title, text, buttonText, buttonLink }) => (
  <SockContainer>
    <SockContentContainer>
      <SockTitle>{title}</SockTitle>
      { text && <SockText>{text}</SockText>}
      { buttonText && <Link to={buttonLink}>
        <SockButton>{buttonText}</SockButton>
      </Link>}
    </SockContentContainer>
  </SockContainer>

)

export default Sock
