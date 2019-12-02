import styled from "styled-components"
import { BBh1, BBh2, BBh3, BBh4, BBp, BBsmallp} from "../Base/fonts"
import { PaddedComponentWrapper } from "../Base/basecomponents"

export const PackagesContainer = styled(PaddedComponentWrapper)`
    text-align: center;
    display: block;
    margin-bottom: 50px;
`

export const PackagesHeadingContainer = styled.div`
    margin-bottom: 75px;
`

export const PackagesContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: left;
    flex-direction: row;
    width: 100%;
    
    @media (max-width: 1300px) {
        margin-bottom: 50px;
        align-self:center;
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
    margin: 50px;
    text-align: center;
    width: 220px;
    @media (max-width: 1300px) {
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
    margin-bottom: 50px;
`
export const RadioContainer = styled.div`
    display: none;

    @media (max-width: 1275px) {
        display: block;
    }

`

export const RadioList = styled.ul`
    list-style-type: none;
    padding: 0;
`

export const RadioButton = styled.li`
    display: inline-block;
    background-color: #ddd;
    padding: 15px 25px 15px 25px;
    cursor: pointer;
    text-tranformation: uppercase;
    border: 1px solid;
    border-radius: 1px;
`

export const RadioInput = styled.input`
    // opacity: 0;
    // position: absolute;
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
    margin-bottom: 50px;
    
`

export const PackageText = styled(BBp)`
    text-transform: uppercase;
`

export const PackagePrice = styled(BBh1)`
    margin:0;
`

export const PackageFinePrintContainer = styled.div`

`

export const PackageFinePrint = styled(BBsmallp)`

`

export const PackagesHeading = styled(BBh2)`
`
export const PackagesSubtitle = styled(BBh4)`
`