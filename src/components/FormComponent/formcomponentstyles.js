import styled from "styled-components";
import { offWhite } from '../Base/colors';
import { PaddedComponentWrapper } from '../Base/basecomponents';

export const StepLine = styled.hr`
    height: 3px;
    background: black;
    width: 100%;
`;

export const StepTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%
`;

export const StepTitleGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SubtitleWrapper = styled.div`
  max-width: 600px
`;

export const FormWrapper = styled(PaddedComponentWrapper)`
  background: ${offWhite};
  width: inherit;
  flex-direction: column;
  align-items: center;
`;