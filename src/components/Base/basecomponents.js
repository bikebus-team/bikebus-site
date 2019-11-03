import styled from "styled-components"
import { linkColor } from "./colors"
import GatsbyLink from "gatsby-link";

export const ComponentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
  @media (min-width: 0px) { 
    padding-left: 30px
    padding-right: 30px;
   }

  @media (min-width: 768px) { 
    padding-left: 50px
    padding-right: 50px;
   }

  @media (min-width: 992px) { 
    padding-left: 100px
    padding-right: 100px;
   }

  @media (min-width: 1200px) { 
    padding-left: 10px
    padding-right: 10px;
   }

  font-family: 'Noto Sans', sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const Button = styled.button`
  background-color: ${linkColor};
  color: white;
  border-radius: 3px;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  &:hover {
      cursor: pointer;
  }
`;

export const Link = styled(GatsbyLink) `
color: ${linkColor};
`;


