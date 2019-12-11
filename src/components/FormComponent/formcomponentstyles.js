import styled from "styled-components";
import { darkGreen, offWhite, teal } from '../Base/colors';
import { Button, PaddedComponentWrapper } from '../Base/basecomponents';
import * as circlesMagenta from "../../images/circlesMagenta.svg";
import * as circlesTeal from "../../images/circlesTeal.svg";

export const StepLine = styled.hr`
    border: 3px solid ${darkGreen};
    width: 100%;
    opacity: ${props => (props.fullOpacity ? 1.0 : 0.3)};
`;

export const StepH = styled.h5`
    color: ${darkGreen};
    opacity: ${props => (props.fullOpacity ? 1.0 : 0.3)};
    display: ${props => (props.isSmall ? "none": "block")};
    
    @media (max-width: 420px) {
        display: ${props => (props.isSmall ? "block": "none")};
    }
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
    @media (max-width: 975px) {
        width: 100%
    }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  @media (max-width: 420px) {
    padding-bottom: 20px;
}
`;

export const SubtitleWrapper = styled.div`
  max-width: 600px
`;

export const FormWrapper = styled(PaddedComponentWrapper)`
  background: ${offWhite};
  width: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 97px;
  overflow: hidden;
  position: relative;
  height: inherit;
  width: inherit;

  @media (max-width: 975px) {
    margin-top: 76px;
  }

  @media (min-width: 975px) {
    padding-top: 150px;
    padding-bottom: 200px;
  }

  @media (max-width: 768px) {
    padding-top: 75px;
    padding-bottom: 100px;
  }

  &:before {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;

    @media (min-width: 0px) {
        width: 250px;
        top: -120px;
        right: auto;
        left: -50px;
    }

    @media (min-width: 420px) {
        width: 250px;
        top: -120px;
        right: auto;
        left: -50px;
    }

    @media (min-width: 768px) {
        width: 250px;
        top: -140px;
        right: auto;
        left: -50px;
    }

    @media (min-width: 1280px) {
      width: 450px;
      top: -240px;
      right: auto;
      left: -50px;
    }
  }
  
  &:after {
    content: "";
    background: url('${circlesMagenta}');
    background-position: 0 0;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 100%;
    right: -125px;
    
    @media (min-width: 0px) {
        width: 250px;
        top: auto;
        bottom: -1500px;
        right: -120px;
        left: auto;
    }

    @media (min-width: 768px) {
        width: 250px;
        top: auto;
        bottom: -1020px;
        right: -150px;
        left: auto;
    }
    @media (min-width: 1280px) {
      position: absolute;
      width: 350px;
      top: auto;
      bottom: -930px;
      right: -170px;
      left: auto;
    }
  }
`;

export const CircleDiv = styled.div`
    overflow: hidden;
    position: relative;
    &:after {
        content: "";
        background: url('${circlesMagenta}');
        background-position: 0 0;
        background-repeat: no-repeat;
        position: absolute;
        width: 500px;
        height: 100%;
        right: -125px;
        display: block;
    
        @media (max-width: 420px) {
            display: none;
        }

        @media (min-width: 768px) {
            width: 400px;
            top: auto;
            bottom: -1020px;
            right: auto;
            left: -230px;
        }
    
        @media (min-width: 1280px) {
            width: 600px;
            top: auto;
            bottom: -930px;
            right: auto;
            left: -330px;
        }
  }
`;

export const ActiveButton = styled(Button)`
    display: inline-block;
    margin-top: 40px;
    width: auto;
    text-transform: uppercase;
    border: 2px solid ${darkGreen};
    &:focus {
        outline-color: ${teal};
    }
`;

export const BackButton = styled(Button)`
    display: inline-block;
    width: auto;
    margin-top: 40px;
    text-transform: uppercase;
    background: ${offWhite};
    color: ${darkGreen};
    border: 2px solid ${darkGreen};
    &:focus {
        outline-color: ${teal};
    }
`;

export const FormStepWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Subtitle = styled.p`
  font-size: 16px;
`;