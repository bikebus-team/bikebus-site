import React from "react"
import {
    FooterContainer,
    FooterContentContainer,
    FooterCompanyInfoContainer,
    FooterLogo,
    FooterCopyright,
    FooterSocialContainer,
    SocialLogo,
    ScoutTag,
    FooterNavContainer,
    FooterListContainer,
    ListTitle,
    FooterList,
    FooterItem,
    Item
    }
  from "./FooterStyles"

const Footer = ({  }) => (
  <FooterContainer>
    <FooterContentContainer>
        <FooterCompanyInfoContainer>
            <FooterLogo></FooterLogo>
            <FooterCopyright>Copyright BikeBus, LLC 2018</FooterCopyright>
            <FooterSocialContainer>
                <SocialLogo></SocialLogo>
                <SocialLogo></SocialLogo>
                <SocialLogo></SocialLogo>
                <SocialLogo></SocialLogo>
            </FooterSocialContainer>
            <ScoutTag>Made with Love by Scout</ScoutTag>
        </FooterCompanyInfoContainer>
        <FooterNavContainer>
            <FooterListContainer>
                <ListTitle>About BikeBus</ListTitle>
                <FooterList>
                    <FooterItem><Item>The Experience</Item></FooterItem>
                    <FooterItem><Item>FAQ</Item></FooterItem>
                    <FooterItem><Item>Safety</Item></FooterItem>
                    <FooterItem><Item>Policies</Item></FooterItem>
                    <FooterItem><Item>Terms and Conditions</Item></FooterItem>
                </FooterList>
            </FooterListContainer>
            <FooterListContainer>
                <ListTitle>Our Rides</ListTitle>
                <FooterList>
                    <FooterItem><Item>Corporate</Item></FooterItem>
                    <FooterItem><Item>Private Events</Item></FooterItem>
                    <FooterItem><Item>Special Events</Item></FooterItem>
                </FooterList>
            </FooterListContainer>
            <FooterListContainer>
                <ListTitle>The Company</ListTitle>
                <FooterList>
                    <FooterItem><Item>Our Story</Item></FooterItem>
                    <FooterItem><Item>Press Releases</Item></FooterItem>
                    <FooterItem><Item>Careers</Item></FooterItem>
                </FooterList>
            </FooterListContainer>
        </FooterNavContainer>
    </FooterContentContainer>
  </FooterContainer>
)

export default Footer
