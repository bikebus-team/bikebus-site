import styled from "styled-components";
import { darkGreen, offWhite } from '../Base/colors';
import { PaddedComponentWrapper } from '../Base/basecomponents';
import * as circlesMagenta from "../../images/circlesMagenta.svg";
import * as circlesTeal from "../../images/circlesTeal.svg";
import { BBh1, BBh5, BBp } from "../Base/fonts";

export const FormTitle = styled(BBh1)`
  text-transform: uppercase;
`;

export const StepLine = styled.hr`
    border: 3px solid ${darkGreen};
    width: 100%;
    opacity: ${props => (props.fullOpacity ? 1.0 : 0.3)};
`;

export const StepH = styled(BBh5)`
    color: ${darkGreen};
    opacity: ${props => (props.fullOpacity ? 1.0 : 0.3)};
    display: ${props => (props.isSmall ? "none" : "block")};
    
    @media (max-width: 975px) {
        display: ${props => (props.isSmall ? "block" : "none")};
    }
`;

export const StepTitleWrapper = styled.div`
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: center;
    width: 30%;
`;

export const StepTitleGroup = styled.div`
    display: ${props => (props.shouldDisplay ? "flex" : "none")};
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const FormTitleWrapper = styled.div`
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
  width: 100%;
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
    background-position: bottom right;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 100%;
    right: -125px;
    z-index: 0;
    
    @media (min-width: 0px) {
        width: 300px;
        top: auto;
        bottom: -140px;
        right: -140px;
        left: auto;
    }

    @media (min-width: 768px) {
        width: 250px;
        top: auto;
        bottom: -120px;
        right: -110px;
        left: auto;
    }
    @media (min-width: 1280px) {
      position: absolute;
      width: 350px;
      top: auto;
      bottom: -200px;
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
        background-position: bottom left;
        background-repeat: no-repeat;
        position: absolute;
        width: 500px;
        height: 100%;
        right: -125px;
        display: block;
        z-index: 0;
    
        @media (max-width: 420px) {
            display: none;
        }

        @media (min-width: 768px) {
            width: 400px;
            top: auto;
            bottom: -250px;
            right: auto;
            left: -230px;
        }
    
        @media (min-width: 1280px) {
            width: 600px;
            top: auto;
            bottom: -300px;
            right: auto;
            left: -300px;
        }
  }
`;

export const FormContentWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const FormStepWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const Subtitle = styled(BBp)`
  font-size: 16px;
`;