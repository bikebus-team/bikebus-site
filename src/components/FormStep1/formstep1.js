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
import { BBh3 } from "../Base/fonts";

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
            <PackageItem 
                optionName="option1" 
                title={stepData.rideOption1.title} 
                description={stepData.rideOption1.description} 
                option={option}
                setOption={setOption}
                user={user}
                setUser={setUser}
                />
            <PackageItem 
                optionName="option2" 
                title={stepData.rideOption2.title} 
                description={stepData.rideOption2.description} 
                option={option}
                setOption={setOption}
                user={user}
                setUser={setUser}
                />
            <PackageItem 
                optionName="option3" 
                title={stepData.rideOption3.title} 
                description={stepData.rideOption3.description} 
                option={option}
                setOption={setOption}
                user={user}
                setUser={setUser}
                />
            <PackageItem 
                optionName="custom" 
                title={stepData.customRides.title} 
                description={stepData.customRides.description} 
                option={option}
                setOption={setOption}
                user={user}
                setUser={setUser}
                />
        </Wrapper>
        <CustomCounter 
            title={stepData.rideNumberTitle}
            option={option}
            user={user}
            setUser={setUser}
            />
        <ConditionWrapper>
            <ConditionText>{stepData.disclaimer}</ConditionText>
        </ConditionWrapper>
        <Switch user={user} setUser={setUser}/>
        <ButtonWrapperStep1>
            <ButtonStep1 onClick={continueOnClick}>Continue</ButtonStep1>
        </ButtonWrapperStep1>
    </FormStep1Wrapper>
};

// Each individual package 
const PackageItem = ({ optionName, title, description, option, setOption, user, setUser }) => {
    return <Item>
        <RadioButton
            type="radio"
            name="radio"
            value={optionName}
            checked={option === optionName}
            onChange={event => handleSelectChange(event.target.value, user, setUser, setOption)}
        />
        <RadioButtonLabel />
        <PackageSelection 
            clicked={option === optionName} 
            tabIndex="0"
            aria-label={title}
            onKeyPress={event => packageOnKey(event, optionName, user, setUser, setOption)}>
            <BBh3>{title}</BBh3>
            <PriceText>{description}</PriceText>
        </PackageSelection>
    </Item>
}

function handleSelectChange(value, user, setUser, setOption) {
    let newUser = {...user};
    if (value === "option1" || value === "custom") {
        newUser.numRides = 1;
    } else if (value === "option2") {
        newUser.numRides = 2;
    } else if (value === "option3") {
        newUser.numRides = 4;
    }
    setUser(newUser);
    setOption(value);
}

function packageOnKey(e, value, user, setUser, setOption) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelectChange(value, user, setUser, setOption);
    }
}

// Switch at the bottom between monthly and one-time 
const Switch = ({ user, setUser }) => {
    const onLeft = (user.frequency === "One-Time");
    return <SwitchWrapper>
        <SwitchText>One-Time</SwitchText>
            <SwitchInnerWrapper>
                <SwitchInput type="checkbox" />
                <SwitchLabel 
                    tabIndex="0" 
                    role="switch" 
                    aria-checked={user.frequency === "One-Time"}
                    onClick={() => clickSwitch(user, setUser)}
                    onKeyPress={e => onSwitchKey(e, user, setUser)}
                    >
                <SwitchSpan left={onLeft} />
                </SwitchLabel>
            </SwitchInnerWrapper>
        <SwitchText>Monthly</SwitchText>
    </SwitchWrapper>
}

function clickSwitch(user, setUser) {
    let newUser = {...user};
    if (user.frequency === "One-Time") {
        newUser.frequency = "Monthly";
    } else {
        newUser.frequency = "One-Time";
    }
    setUser(newUser);
}

function onSwitchKey(e, user, setUser) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        clickSwitch(user, setUser);
    }
}

// Counter that appears only for custom packages
const CustomCounter = ({ title, option, user, setUser, }) => {
    return <CustomCounterWrapper show={option === "custom"}>
        <Subtitle>{title}</Subtitle>
        <CustomButtonWrapper>
            <CustomButton onClick={() => updateNumRides(parseInt(user.numRides) - 1, user, setUser)}>
                -
            </CustomButton>
        </CustomButtonWrapper>
        <CustomInput 
            type="number"
            min={1}
            max={99}
            value={user.numRides}
            onKeyDown={e => (e.key === "e" || e.key === "." || e.key === "+" || e.key === "-") && e.preventDefault()}
            onChange={e => updateNumRides(e.target.value, user, setUser)}
            onBlur={() => checkEmpty(user, setUser)} />
        <CustomButtonWrapper>
            <CustomButton onClick={e => updateNumRides(parseInt(user.numRides) + 1, user, setUser)}>
                +
            </CustomButton>
        </CustomButtonWrapper>
    </CustomCounterWrapper>
}

function updateNumRides(newVal, user, setUser) {
    const numberRegex = /^[1-9][0-9]?$|^99$/;
    if (newVal === "" || numberRegex.test(newVal)) {
        let newUser = {...user};
        newUser.numRides = newVal;
        setUser(newUser);
    }
}

function checkEmpty(user, setUser) {
    if (user.numRides === "") {
        let newUser = {...user};
        newUser.numRides = 1;
        setUser(newUser);
    }
}

FormStep1.propTypes = {
    continueOnClick: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
    clickedOption: PropTypes.number,
    stepData: PropTypes.object,
}

FormStep1.defaultProps = {
    clickedOption: 0,
}

export default FormStep1