import styled from "styled-components";
import { darkGreen, offWhite } from '../Base/colors';
import { Button, PaddedComponentWrapper } from '../Base/basecomponents';

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

export const ActiveButton = styled(Button)`
    margin-top: 20px;
    width: 15%;
    text-tranformation: uppercase;
    border: 2px solid ${darkGreen};
`;

export const BackButton = styled(Button)`
    width: 15%;
    margin-top: 20px;
    text-tranformation: uppercase;
    background: ${offWhite};
    color: ${darkGreen};
    border: 2px solid ${darkGreen};
`;

export const FormStepWrapper = styled.div`
    width: 100%;
`;