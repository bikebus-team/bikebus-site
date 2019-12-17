import React from "react"
import {
    HamburgerContainer,
    Bar,
    HamburgerMenu,
    Bar1,
    Bar2,
    MenuContainer,
    MenuContentContainer,
    HambHeaderLink,
    HambHeaderPage,
    HambLinkContainer
} from "./HamburgerStyles"

const Hamburger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return <HamburgerContainer onClick={toggle}>
        {renderStep(isOpen)}
    </HamburgerContainer>  
}

function renderStep(isOpen) {
    if (!isOpen) {
        return <HamburgerMenu>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </HamburgerMenu>
    } else {
        return <MenuContainer>
            <HamburgerMenu>
                <Bar1></Bar1>
                <Bar2></Bar2>
            </HamburgerMenu>
            <MenuContentContainer>
              <HambLinkContainer>
                <HambHeaderLink to="/experience/" activeStyle={{color: "white"}} ><HambHeaderPage>The Experience</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/corporate/" activeStyle={{color: "white"}}><HambHeaderPage>Corporate</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/private/" activeStyle={{color: "white"}}><HambHeaderPage>Private Groups</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/story/" activeStyle={{color: "white"}}><HambHeaderPage>Our Story</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/"activeStyle={{color: "white"}} ><HambHeaderPage>Request a Quote</HambHeaderPage></HambHeaderLink>
              </HambLinkContainer>
            </MenuContentContainer>
        </MenuContainer>
    }
}

export default Hamburger
