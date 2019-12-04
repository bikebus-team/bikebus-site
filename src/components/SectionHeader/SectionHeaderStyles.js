import styled from "styled-components"
import {BBh2, BBp} from "../Base/fonts"
import { PaddedComponentWrapper } from "../Base/basecomponents"

export const SectionHeaderContainer = styled(PaddedComponentWrapper)`
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: center;
    margin-top: 50px;
`

export const SectionHeaderContentContainer = styled.div`
    width: 50%;
    overflow-wrap: break-word;
    display: inline-block;
    align-self: center;

    @media (min-width: 0px) {
        width: 85%;
      }
    
      @media (min-width: 768px) {
        width: 75%;
      }
    
      @media (min-width: 992px) {
        width: 65%;
      }
    
      @media (min-width: 1200px) {
        width: 50%;
      }
`



export const SectionHeaderTitle = styled(BBh2)`

`


export const SectionHeaderDescription = styled(BBp)`
    text-align:left;
`
