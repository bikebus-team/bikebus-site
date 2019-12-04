import styled from "styled-components"
import { BBh2, BBh3, BBh4, BBp, } from "../Base/fonts"
import { PaddedComponentWrapper } from "../Base/basecomponents"

export const StepsContainer = styled(PaddedComponentWrapper)`
    text-align: center;
    display: block;
    margin: 25px 0 50px 0;
`

export const StepsHeadingContainer = styled.div`
    margin-bottom: 75px;
`

export const StepsContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    flex-direction: row;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }
`

export const SingleStepWrapper = styled.div`
    margin: 0 20px 0 20px;
    @media (max-width: 768px) {
        margin-bottom: 50px;
        align-self:center;
    }

`

export const StepIconContainer = styled.div`
    width: 75px;
    height: 75px;

`

export const StepTextContainer = styled.div`
    overflow-wrap: break-word;
    max-width: 200px;
`

export const StepTitle = styled(BBh3)`
`
export const StepDescription = styled(BBp)`
`
export const StepsHeading = styled(BBh2)`
`
export const StepsSubtitle = styled(BBh4)`
`
