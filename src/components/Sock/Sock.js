import React from "react"
import { Button, Link } from "../Base/basecomponents"
import {
  SockContainer,
  SockContentContainer}
  from "./SockStyles"

const Sock = ({ title, text, buttonText, buttonLink }) => (
  <SockContainer>
    <SockContentContainer>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={buttonLink}>
        <Button>{buttonText}</Button>
      </Link>
    </SockContentContainer>
  </SockContainer>

)

export default Sock
