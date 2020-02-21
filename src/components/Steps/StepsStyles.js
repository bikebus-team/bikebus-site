import styled from "styled-components"
import { BBh2, BBh3, BBh4, BBp, } from "../Base/fonts"
import { PaddedComponentWrapper } from "../Base/basecomponents"
import { SIZES } from "../../tokens"

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

    @media (max-width: ${SIZES.BREAK_TABLET}) {
        flex-direction: column;
        justify-content: space-around;
    }
`

export const SingleStepWrapper = styled.div`
    width: 100%;

    &:not(:last-child) {
        margin-right: 40px;
    }

    @media (max-width: ${SIZES.BREAK_TABLET}) {
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        &:not(:last-child) {
            margin-right: auto;
            margin-bottom: 60px;
        }
    }

    @media (max-width: ${SIZES.BREAK_SM}) {
        margin-left: 0;
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 50px;
        }
    }

`

export const StepIconContainer = styled.div`
    width: 44px;
    height: 44px;
    margin-bottom: 25px;
    @media (max-width: ${SIZES.BREAK_TABLET}) {
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: ${SIZES.BREAK_SM}) {
        margin-left: 0;
    }
`

export const StepTextContainer = styled.div`
    overflow-wrap: break-word;
`

export const StepTitle = styled(BBh3)`
    @media (max-width: ${SIZES.BREAK_TABLET}) {
        text-align: center;
    }

    @media (max-width: ${SIZES.BREAK_SM}) {
        text-align: left;
    }
`
export const StepDescription = styled(BBp)`
`
export const StepsHeading = styled(BBh2)`
`
export const StepsSubtitle = styled(BBh4)`
`
