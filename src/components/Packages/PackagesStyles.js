import styled from "styled-components"
import { BBh1, BBh2, BBh4, BBp, BBsmallp} from "../Base/fonts"
import { PaddedComponentWrapper, Button } from "../Base/basecomponents"
import { darkGreen } from "../Base/colors"

export const PackagesContainer = styled(PaddedComponentWrapper)`
    text-align: center;
    display: block;
    margin-bottom: 50px;
`

export const PackagesHeadingContainer = styled.div`
    margin-bottom: 50px;

    @media (max-width: 1275px) {
        margin-bottom: 15px;
        align-self:center;
    }
`

export const TogglePackageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: left;
    flex-direction: row;
    width: 100%;
    display:none;
    
    @media (max-width: 1275px) {
        margin-bottom: 50px;
        align-self:center;
        display: flex;
    }
`

export const PackagesContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: left;
    flex-direction: row;
    width: 100%;
    
    @media (max-width: 1275px) {
        margin-bottom: 50px;
        align-self:center;
        display: none;
    }
`

export const SinglePackageWrapper = styled.div`
    border: 1px solid;
    margin: 0 20px 0 20px;
    @media (max-width: 768px) {
        margin-bottom: 50px;
        align-self:center;
    }

`

export const SinglePackageContentContainer = styled.div`
    margin: 40px 65px 40px 65px;
    text-align: center;
    width: 220px;
    @media (max-width: 1275px) {
        margin-bottom: 50px;
        align-self:center;
    }

    @media (max-width: 768px) {
        margin-bottom: 50px;
        align-self:center;
    }

`

export const PackageHeaderContainer = styled.div`
    text-align: center;
    margin-bottom: 30px;
`
export const ButtonTabContainer = styled.div`
    display: none;
    text-align: center;

    @media (max-width: 1275px) {
        display: block;
        margin: 20px 0 20px 0;
    }
`

export const ButtonTabs = styled.div`
    display: inline-flex;
`

export const PackageButton = styled(Button)`
    color: ${ props => (props.isCurrentStep ? 'white' : darkGreen) };
    background-color: ${ props => (props.isCurrentStep ? darkGreen : 'white') };
    border: 1px solid ${ darkGreen };
    text-transform: none;

    :focus {
        background-color: ${darkGreen};
        color: white;
        outline: none;
    }

    &:nth-child(1) {
        border-radius: 3px 0 0 3px;
    }

    &:nth-child(2) {
        border-radius: 0;
    }

    &:nth-child(3) {
        border-radius: 0 3px 3px 0;
    }
`



export const PackageHeader = styled(BBh2)`
    text-transform: uppercase;
    margin: 0 0;
`

export const PackageSubtitle = styled(BBp)`
    text-transform: uppercase;
    margin-top: 0;
    text-weight: 100;
`

export const PackagePriceContainer = styled.div`
    text-align: center;
    margin-bottom: 30px;
    
`

export const PackageText = styled(BBp)`
    text-transform: uppercase;
`

export const PackagePrice = styled(BBh1)`
    margin:0;
    
    @media (max-width: 1275px) {
        color: white;
    }
`

export const PackageFinePrintContainer = styled.div`
    line-height: 15px;
    margin-top: 10px;
    text-align: left;
`

export const PackageFinePrint = styled(BBsmallp)`

`

export const PackagesHeading = styled(BBh2)`
`
export const PackagesSubtitle = styled(BBh4)`
`