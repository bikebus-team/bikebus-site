import styled from "styled-components"
import { BBh2 } from "../Base/fonts"
import { PaddedComponentWrapper } from "../Base/basecomponents"

export const CompaniesContainer = styled(PaddedComponentWrapper)`
    text-align: center;
    display: block;
    margin: 25px 0 50px 0;
`

export const CompaniesHeadingContainer = styled.div`
    margin-bottom: 75px;
`

export const CompaniesLogosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: row;
    width: 100%;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }
`

export const SingleLogoWrapper = styled.div`
    margin: 0 20px 0 20px;
    @media (max-width: 768px) {
        margin: 50px;
        align-self:center;
    }

`

export const LogoContainer = styled.div`
    width: 150px;

`

export const CompanyLogo = styled.img`
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);

`

export const CompaniesHeading = styled(BBh2)`
`

