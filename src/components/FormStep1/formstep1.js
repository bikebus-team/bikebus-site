import PropTypes from "prop-types"
import React from "react"
import { 
    FormStep1Wrapper, 
    TitleWrapper,
    RadioContainer,
    RadioList,
    RadioButton,
    RadioInput } from "./formstep1styles"

function radioPackage(index) {
    const header = "Header"
    return (
        <RadioButton key={index}>
            <RadioInput
                type="radio" 
                value={header}
                name={header}/> {header}
        </RadioButton>
    );
}

const FormStep1 = ({}) => (
    <FormStep1Wrapper>
        <TitleWrapper>
            <h5>Amount of Rides</h5>
        </TitleWrapper>
    </FormStep1Wrapper>
);

FormStep1.propTypes = {
}

FormStep1.defaultProps = {
}

export default FormStep1