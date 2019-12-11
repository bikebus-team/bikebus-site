import PropTypes from "prop-types";
import React from "react";
import {
    ButtonStep1,
    ButtonWrapperStep1,
    ConditionText,
    ConditionWrapper,
    CustomButton,
    CustomButtonWrapper,
    CustomCounterWrapper,
    CustomInput,
    FormStep1Wrapper, 
    Item,
    PackageSelection,
    PriceText,
    RadioButton,
    RadioButtonLabel,
    SwitchInnerWrapper,
    SwitchInput,
    SwitchLabel,
    SwitchSpan,
    SwitchText,
    SwitchWrapper,
    Subtitle,
    Wrapper
 } from "./formstep1styles";
import {
    TitleWrapper, StepTitle } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

function handleSelectChange(event, user, setUser, option, setOption) {
    const value = event.target.value;
    let newUser = {...user};
    if (value.localeCompare("option1") || value.localeCompare("custom")) {
        newUser.numRides = 1;
    } else if (value.localeCompare("option2")) {
        newUser.numRides = 2;
    } else if (value.localeCompare("option3")) {
        newUser.numRides = 4;
    }
    setUser(newUser);
    setOption(value);
}

function clickSwitch(e, user, setUser) {
    let newUser = {...user};
    if (!user.frequency.localeCompare("One-Time")) {
        newUser.frequency = "Monthly";
    } else {
        newUser.frequency = "One-Time";
    }
    setUser(newUser);
}

const Switch = ({ user, setUser }) => {
    const onLeft = !user.frequency.localeCompare("One-Time");
    return <SwitchInnerWrapper>
        <SwitchInput type="checkbox" />
        <SwitchLabel onClick={e => clickSwitch(e, user, setUser)} >
            <SwitchSpan left={onLeft} />
        </SwitchLabel>
    </SwitchInnerWrapper>
}

function updateNumRides(newNum, user, setUser) {
    if (newNum > 0) {
        let newUser = {...user};
        newUser.numRides = newNum;
        setUser(newUser);
    }
}

const FormStep1 = ({ continueOnClick, user, setUser, clickedOption, stepData }) => {
    const index = clickedOption ? clickedOption + 1 : 1;
    const selectedOption = "option" + index;
    const [option, setOption] = React.useState(selectedOption);

    return <FormStep1Wrapper>
        <TitleWrapper>
            <StepTitle>{stepData.stepTitle}</StepTitle>
            <Subtitle >{stepData.title}</Subtitle>
        </TitleWrapper>
        <Wrapper>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                value="option1"
                checked={!option.localeCompare("option1")}
                onChange={event => handleSelectChange(event, user, setUser, option, setOption)}
                />
                <RadioButtonLabel />
                <PackageSelection clicked={!option.localeCompare("option1")}>
                    <h3>{stepData.rideOption1.title}</h3>
                    <PriceText>{stepData.rideOption1.description}</PriceText>
                </PackageSelection>
            </Item>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                value="option2"
                checked={!option.localeCompare("option2")}
                onChange={event => handleSelectChange(event, user, setUser, option, setOption)}
                />
                <RadioButtonLabel />
                <PackageSelection clicked={!option.localeCompare("option2")}>
                    <h3>{stepData.rideOption2.title}</h3>
                    <PriceText>{stepData.rideOption2.description}</PriceText>
                </PackageSelection>
            </Item>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                value="option3"
                checked={!option.localeCompare("option3")}
                onChange={event => handleSelectChange(event, user, setUser, option, setOption)}
                />
                <RadioButtonLabel />
                <PackageSelection clicked={!option.localeCompare("option3")}>
                    <h3>{stepData.rideOption3.title}</h3>
                    <PriceText>{stepData.rideOption3.description}</PriceText>
                </PackageSelection>
            </Item>
            <Item>
                <RadioButton
                type="radio"
                name="radio"
                value="custom"
                checked={!option.localeCompare("custom")}
                onChange={event => handleSelectChange(event, user, setUser, option, setOption)}
                />
                <RadioButtonLabel />
                <PackageSelection clicked={!option.localeCompare("custom")}>
                    <h3>{stepData.customRides.title}</h3>
                    <PriceText>{stepData.customRides.description}</PriceText>
                </PackageSelection>
            </Item>
        </Wrapper>
        <CustomCounterWrapper show={!option.localeCompare("custom")}>
            <Subtitle>{stepData.rideNumberTitle}</Subtitle>
            <CustomButtonWrapper>
                <CustomButton onClick={e => updateNumRides(parseInt(user.numRides - 1), user, setUser)}>-</CustomButton>
            </CustomButtonWrapper>
            <CustomInput type="number" value={user.numRides} onChange={e => updateNumRides(e.target.value, user, setUser)} />
            <CustomButtonWrapper>
                <CustomButton onClick={e => updateNumRides(parseInt(user.numRides) + 1, user, setUser)}>+</CustomButton>
            </CustomButtonWrapper>
        </CustomCounterWrapper>
        <ConditionWrapper>
            <ConditionText>{stepData.disclaimer}</ConditionText>
        </ConditionWrapper>
        <SwitchWrapper>
            <SwitchText>One-Time</SwitchText>
            <Switch user={user} setUser={setUser}/>
            <SwitchText>Monthly</SwitchText>
        </SwitchWrapper>
        <ButtonWrapperStep1>
            <ButtonStep1 onClick={continueOnClick}>Continue</ButtonStep1>
        </ButtonWrapperStep1>
    </FormStep1Wrapper>
};

FormStep1.propTypes = {
}

FormStep1.defaultProps = {
}

export default FormStep1