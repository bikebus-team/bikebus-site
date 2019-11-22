import React from "react"
import { getImageUrl } from "takeshape-routing"
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
    RadioContainer,
    RadioList,
    RadioButton,
    RadioInput}
  from "./PackagesStyles"

const Packages = ({ heading, subtitle, packages}) => (
    <PackagesContainer>
        <PackagesHeadingContainer>
            <PackagesHeading>{heading}</PackagesHeading>
            <PackagesSubtitle>{subtitle}</PackagesSubtitle>
        </PackagesHeadingContainer>
        <RadioContainer>
            <RadioList>
            {packages.map((packages, index) => 
                radioPackage(packages, index))}
            </RadioList>
        </RadioContainer>
        <PackagesContentContainer>
            {packages.map((packages, index) => 
                singlePackage(packages, index))}
        </PackagesContentContainer>
    </PackagesContainer>
  
  )

function radioPackage(packages, index) {
    const header = packages.option.title
    return (
        <RadioButton key={index}>
            <RadioInput
                type="radio" 
                value={header} 
                name={header}/> {header}
        </RadioButton>
    );
}

function singlePackage(packages, index) {
    const price = packages.option.personPrice;
    const subtitle = packages.option.subtitle;
    const header = packages.option.title;
    return (
        <SinglePackageWrapper key={index}>
            <SinglePackageContentContainer>
                <PackageHeaderContainer>
                    <PackageHeader>{header}</PackageHeader>
                    <PackageSubtitle>{subtitle}</PackageSubtitle>
                </PackageHeaderContainer>
                <PackagePriceContainer>
                    <PackageText>Starting at</PackageText> 
                    <PackagePrice>${price}</PackagePrice>
                    <PackageText>Per person</PackageText> 
                </PackagePriceContainer>
                <Link to={"/"}>
                    <Button>Request a Quote</Button>
                </Link>
                <PackageFinePrintContainer>
                    <PackageFinePrint>*must book entire bus up to 8 persons.</PackageFinePrint>
                </PackageFinePrintContainer>
            </SinglePackageContentContainer>
        </SinglePackageWrapper>
    );
}

export default Packages