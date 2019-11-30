import styled from "styled-components"
import { BBh1, BBh2, BBp } from "../Base/fonts"
import { PaddedComponentWrapper} from "../Base/basecomponents"

export const FooterContainer = styled.div`
    width: 100%;
    background-color: black;
    display: flex;

`

export const FooterContentContainer = styled(PaddedComponentWrapper)`
    padding: 50px 150px 50px 150px;
    display:flex;
    justify-content: space-between;
    width: inherit;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }

`

export const FooterCompanyInfoContainer = styled.div`
    display: block;

    @media (max-width: 768px) {
        margin-bottom: 25px;
    }
`

export const FooterLogo = styled.div`
    height: 50px;
    width: 250px;
    background-color: white;
    margin: 0 0 35px 0;

`

export const FooterCopyright = styled(BBp)`
    color: white;
    margin: 35px 0 35px 0;
`

export const FooterSocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0 35px 0;
    width: 250px;


`

export const SocialLogo = styled.div`
    width: 15px;
    height: 15px;
    background-color: white;
`

export const ScoutTag = styled(BBp)`
    color: white;
    margin: 35px 0 0 0;
`


export const FooterNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FooterListContainer = styled.div`
    margin: 0 25px 0 25px;
`

export const ListTitle = styled(BBp)`
    text-transform: uppercase;
    font-weight: bold;
    color: white;
`

export const FooterList = styled.ul`
    list-style-type:none;
    padding: 0;
`

export const FooterItem = styled.li`
    
`

export const Item = styled(BBp)`
    color: white;
`

