import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import { 
    FormStep2Wrapper, 
    Input,
    TitleWrapper
} from "./formstep2styles"


class FormStep2 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <FormStep2Wrapper>
                <TitleWrapper>
                    <h5>Personal Info</h5>
                </TitleWrapper>
                <Input/>
            </FormStep2Wrapper>
        );
    }
}

FormStep2.propTypes = {
}

FormStep2.defaultProps = {
}

export default FormStep2