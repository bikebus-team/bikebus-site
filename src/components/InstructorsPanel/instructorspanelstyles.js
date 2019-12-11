import styled from "styled-components"
import { PaddedComponentWrapper } from "../Base/basecomponents"

export const InstructorsPanelWrapper = styled(PaddedComponentWrapper)`
  flex-direction: column;
`

export const InstructorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SingleInstructorWrapper = styled.div`
  width: 30%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TextWrapper = styled.div``

export const FunImage = styled.img``;

export const SeriousImage = styled.img``;

export const InstructorImageWrapper = styled.div`
  ${FunImage} {
    display: none;
  }
  ${SeriousImage} {
    display: inline;
  }

  &:hover {
    ${FunImage} {
      display: inline;
    }
    ${SeriousImage} {
      display: none;
    }
  }
`;