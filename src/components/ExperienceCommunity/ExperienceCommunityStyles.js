import styled from "styled-components";
import { BBh2 } from "../Base/fonts";

export const CommunityWrapper = styled.div`
  /* TODO: edit all side padding to constants */
  @media (min-width: 0px) {
    padding: 0 10%;
  }
  
  @media (min-width: 420px) {
    padding: 0 10%;
  }

  @media (min-width: 768px) {
    padding: 0 50px;
  }
`

export const CommunityTitle = styled(BBh2)``

export const CommunityImageContainer = styled.div``

export const CommunityImageRow = styled.div`
  display: flex;

  @media (min-width: 0px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 420px) {
    flex-direction: row;
    /* TODO: edit to constants */
    padding-bottom: 20px;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    /* TODO: edit to constants */
    padding-bottom: 20px;
  }
`

export const CommunityImage = styled.div`
  overflow: hidden;
  background-image: url('${props => props.imgSrc}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (min-width: 0px) {
    width: 90%;
    height: 160px;
    margin-bottom: 10px;
  }
  @media (min-width: 420px) {
    width: ${props => (props.isLarge ? "63%" : "35%")};
    height: 225px;
    display: block;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: ${props => (props.isLarge ? "63%" : "35%")};
    height: 400px;
  }
`
