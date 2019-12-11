import React from "react"
import { getImageUrl } from "takeshape-routing"
import { darkGreen, offWhite } from "../Base/colors"
import { Button, Link } from "../Base/basecomponents"
import {
    PackagesContainer,
    PackagesHeadingContainer,
    PackagesContentContainer,
    SinglePackageWrapper,
    SinglePackageContentContainer,
    PackageHeaderContainer,
    PackageHeader,
    PackageSubtitle,
    PackagePriceContainer,
    PackageText,
    PackagePrice,
    PackageFinePrintContainer,
    PackageFinePrint,
    PackagesHeading,
    PackagesSubtitle,
    ButtonTabContainer, 
    ButtonTabs,
    PackageButton,
    TogglePackageContainer}
  from "./PackagesStyles"


const Packages = ({ heading, subtitle, packages}) => {
    const [step, setStep] = React.useState(1);
    return <PackagesContainer>
        <PackagesHeadingContainer>
            <PackagesHeading>{heading}</PackagesHeading>
            <PackagesSubtitle>{subtitle}</PackagesSubtitle>
        </PackagesHeadingContainer>
        <ButtonTabContainer>
            <ButtonTabs>
                {packages.map((packages, index) => 
                    tabPackage(packages, index, setStep))}
            </ButtonTabs>
        </ButtonTabContainer>
        <TogglePackageContainer>
            {renderStep(step, packages)}
        </TogglePackageContainer>
        <PackagesContentContainer>
            {packages.map((packages, index) => 
                singlePackage(packages, index, false))}
        </PackagesContentContainer>
    </PackagesContainer>
  
    }

function tabPackage(packages, index, setStep) {
    const header = packages.option.title
    return (
        <PackageButton key={index} onClick={() => setStep(index)}>
            {header}
        </PackageButton>
    );
}


function renderStep(step, packages) {
    switch(step) {
        case 0:
            return singlePackage(packages[step], step, true)
        case 1:
            return singlePackage(packages[step], step, true)
        case 2:
            return singlePackage(packages[step], step, true)
        default:
            return singlePackage(packages[0], 0)
    }
}

function singlePackage(packages, index, isHighlighted) {
    const price = packages.option.personPrice;
    const subtitle = packages.option.subtitle;
    const header = packages.option.title;
    const fineprint = packages.option.finePrint;
    
    if (index === 1) {
        isHighlighted = true;
    }

    return (
        <SinglePackageWrapper key={index} style={ isHighlighted ? { backgroundColor: darkGreen} : null }  >
            <SinglePackageContentContainer>
                <PackageHeaderContainer>
                    <PackageHeader style={ isHighlighted ? {color: 'white'} : null }>{header}</PackageHeader>
                    <PackageSubtitle style={ isHighlighted ? {color: 'white'} : null }>{subtitle}</PackageSubtitle>
                </PackageHeaderContainer>
                <PackagePriceContainer>
                    <PackageText style={ isHighlighted ? {color: 'white'} : null }>Starting at</PackageText> 
                    <PackagePrice style={ isHighlighted ? {color: 'white'} : null }>${price}</PackagePrice>
                    <PackageText style={ isHighlighted ? {color: 'white'} : null }>Per person</PackageText> 
                </PackagePriceContainer>
                <Link to={"/form"} state={{ option: index }}>
                    <Button style={ isHighlighted ? { backgroundColor: 'white', color: darkGreen} : null }>Request a Quote</Button>
                </Link>
                <PackageFinePrintContainer>
                    <PackageFinePrint style={ isHighlighted ? {color: 'white'} : null }>{fineprint}</PackageFinePrint>
                </PackageFinePrintContainer>
            </SinglePackageContentContainer>
        </SinglePackageWrapper>
    );
}

export default Packages