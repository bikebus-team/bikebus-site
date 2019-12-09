import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { 
    FormStep1Wrapper, 
    RadioInput } from "./formstep1styles";
import { darkGreen, offWhite } from "../Base/colors";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 24%;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: solid 2px #8b8b8b;
  margin: 4px;
`;
const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 4px;
  &:hover ~ ${RadioButtonLabel} {
    background: ${offWhite};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
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
      width: 16px;
      height: 16px;
      margin: 4px;
      background: ${darkGreen};
    }
  }
`;

const PackageSelection = styled.div`
  height: 160px;
  border: solid 2px ${darkGreen};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const RadioContainer = styled.div`
`;

function handleSelectChange(event) {
    console.log("clicked", event);
}

const FormStep1 = ({ user, setUser }) => (
    <FormStep1Wrapper>
        
            
        <Wrapper>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                onChange={event => handleSelectChange(event)}
                />
                <RadioButtonLabel />
                <PackageSelection>
                    <h3>1 Ride</h3>
                    <p>Starting at $69 per person</p>
                </PackageSelection>
            </Item>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                onChange={event => handleSelectChange(event)}
                />
                <RadioButtonLabel />
                <PackageSelection>
                    <h3>2 Rides</h3>
                    <p>Starting at $59 per person</p>
                </PackageSelection>
            </Item>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                onChange={event => handleSelectChange(event)}
                />
                <RadioButtonLabel />
                <PackageSelection>
                    <h3>4 Rides</h3>
                    <p>Starting at $50 per person</p>
                </PackageSelection>
            </Item>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                onChange={event => handleSelectChange(event)}
                />
                <RadioButtonLabel />
                <PackageSelection>
                    <h3>Custom</h3>
                    <p>Price dependent upon the number of rides</p>
                </PackageSelection>
            </Item>
        </Wrapper>

    </FormStep1Wrapper>
);

FormStep1.propTypes = {
}

FormStep1.defaultProps = {
}

export default FormStep1