import styled from "styled-components"
import { BBp } from "../Base/fonts"
import { PaddedComponentWrapper, Link, OutsideLink } from "../Base/basecomponents"
import { onDark, pureWhite } from "../Base/colors"
import { SIZES } from '../../tokens';

export const FooterContainer = styled.footer`
    background-color: black;

`

export const FooterContentContainer = styled(PaddedComponentWrapper)`
    padding: 75px 150px 75px 150px;
    display:flex;
    justify-content: space-between;
    width: inherit;

    @media (max-width: ${SIZES.BREAK_TABLET}) {
        flex-direction: column;
        justify-content: space-around;
    }

`

export const FooterCompanyInfoContainer = styled.div`
    display: block;

    @media (max-width: ${SIZES.BREAK_TABLET}) {
        margin-bottom: 56px;
    }
`

export const FooterLogo = styled.img`
    height: 50px;
    width: 250px;
    max-width: 100%;
`

export const FooterCopyright = styled(BBp)`
    color: white;
    margin: 20px 0 20px 0;
`

export const FooterSocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 36px 0 0 0;
    width: 200px;

    @media (max-width: ${SIZES.BREAK_TABLET}) {
        margin-top: 56px;
    }

    @media (max-width: ${SIZES.BREAK_SM}) {
        margin-top: 40px;
    }
`

export const SocialLogo = styled.img`
    width: 25px;
    height: 25px;
`

export const ScoutTag = styled(BBp)`
    color: white;
    margin: 35px 0 0 0;
`


export const FooterNavContainer = styled.div`
    display: flex;

    @media (max-width: ${SIZES.BREAK_SM}) {
        flex-wrap: wrap;
    }
`

export const FooterListContainer = styled.div`
    &:not(:last-child) {
        margin-right: 100px;
        @media (max-width: ${SIZES.BREAK_LG}) {
            margin-right: 50px;
        }
    }
    @media (max-width: ${SIZES.BREAK_SM}) {
        flex-basis: 50%;
        padding-right: 12px;
        box-sizing: border-box;
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 40px;
        }
    }
    @media (max-width: 340px) {
        flex-basis: 100%;
        padding-right: 0px;
    }
`

export const ListTitle = styled(BBp)`
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    margin-top: 0px;
`

export const FooterList = styled.ul`
    list-style-type:none;
    padding: 0;
`

export const FooterItem = styled.li`
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: ${onDark};
    transition: 250ms ease-in-out color;
    &:hover {
        color: ${pureWhite};
    }
`

export const ScoutLink = styled(OutsideLink)`
    text-decoration: none;
`

export const Item = styled(BBp)`
    color: white;
`

