import styled from "styled-components";
import { darkGreen, offWhite, teal } from "../Base/colors";
import { ActiveButton } from "../FormComponent/formcomponentstyles";
import { ButtonWrapper } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";
import { BBh5, BBp } from "../Base/fonts";


export const FormStep1Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px
`;

export const Item = styled.div`
    width: 245px;
    padding-bottom: 20px;

    @media (max-width: 420px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 320px;
    }
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: solid 2px #8b8b8b;
  margin: 10px;
`;

export const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  width: 245px;
  height: 160px;
  
  @media (max-width: 420px) {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    width: 320px;
  }
  
  &:hover ~ ${RadioButtonLabel} {
    background: ${offWhite};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4px;
      background: ${darkGreen};
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: ${offWhite};
    border: 2px solid ${darkGreen};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4px;
      background: ${darkGreen};
    }
  }
`;

export const PackageSelection = styled.div`
  height: 160px;
  border: solid 2px ${props => (props.clicked ? darkGreen : "#8b8b8b")};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PriceText = styled(BBp)`
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ConditionText = styled(BBp)`
    font-size: 10px;
`;

export const SwitchText = styled(BBp)`
  font-size: 16px;
  color: ${darkGreen};
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SwitchInnerWrapper = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`;

export const SwitchInput = styled.input`
  position:absolute;
  height: 0;
  width: 0;
  visibility: hidden;
`;
export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 55px;
  height: 23px;
  background: ${offWhite};
  border: 2px solid ${darkGreen};
  border-radius: 100px;
  position: relative;
  transition: background-color .15s;
`;
export const SwitchSpan = styled.span`
  content: '';
  position: absolute;
  top: 4px;
  left: ${props => (props.left ? "4px" : "calc(100% - 15px - 4px)")};
  width: 15px;
  height: 15px;
  border-radius: 15px;
  transition: 0.15s;
  background: ${darkGreen};
`;

export const CustomCounterWrapper = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const CustomButton = styled.button`
  display:inline-block;
  color: ${offWhite};
  background-color: ${darkGreen};
  border-style: none;
  border-radius: 2px;
  text-align: center;
  line-height: 1em;
  font-size: 14px;
  font-weight: 700;
  width: 28px;
  height: 28px;
  padding: 0px;
  &:focus {
    outline-color: ${teal};
  }
`;

export const CustomButtonWrapper = styled.div`
  padding: 20px;
`;

export const CustomInput = styled.input`
    height: 50px;
    width: 42px;
    font-size: 24px;
    font-family: "Noto Sans", sans-serif;
    font-weight: bold;
    text-align: center;
    color: ${darkGreen};
    border: 2px solid ${darkGreen};
    border-radius: 2px;
    padding: 5px;
    &:focus {
      outline-color: ${teal};
    }
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

export const ConditionWrapper = styled.div`
  max-width: 420px;
`;

export const Subtitle = styled(BBh5)`
  color: ${darkGreen};
`;

export const ButtonWrapperStep1 = styled(ButtonWrapper)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonStep1 = styled(ActiveButton)`
  margin-top: 0px;
`;