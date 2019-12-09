import styled from "styled-components";
import { darkGreen, offWhite } from '../Base/colors';
import { Button, PaddedComponentWrapper } from '../Base/basecomponents';

export const StepLine = styled.hr`
    border: 3px solid ${darkGreen};
    width: 100%;
    opacity: ${props => (props.fullOpacity ? 1.0 : 0.3)};
`;

export const StepH = styled.h5`
    color: ${darkGreen};
    opacity: ${props => (props.fullOpacity ? 1.0 : 0.3)};
`;

export const StepTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`;

export const StepTitleGroup = styled.div`
    display: ${props => (props.shouldDisplay ? "flex" : "none")};
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
  padding-bottom: 50px;
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
    display: inline-block;
    margin-top: 40px;
    width: auto;
    text-transform: uppercase;
    border: 2px solid ${darkGreen};
`;

export const BackButton = styled(Button)`
    display: inline-block;
    width: auto;
    margin-top: 40px;
    text-transform: uppercase;
    background: ${offWhite};
    color: ${darkGreen};
    border: 2px solid ${darkGreen};
`;

export const FormStepWrapper = styled.div`
    width: 100%;
`;