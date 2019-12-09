import styled from "styled-components"
import { richBlack } from "../Base/colors"
import { ComponentWrapper } from "../Base/basecomponents"

export const PageTitleWrapper = styled(ComponentWrapper)`
  background-color: ${richBlack};
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 97px;
  
  @media (max-width: 975px) {
    margin-top: 76px;
  }
`

export const TextWrapper = styled.div`
  color: white;
`
