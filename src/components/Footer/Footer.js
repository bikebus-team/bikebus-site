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

const Footer = ({ SocialList, AboutListItems, RideListItems, CompanyListItems }) => (
  <FooterContainer>
    <FooterContentContainer>
        <FooterCompanyInfoContainer>
            <FooterLogo></FooterLogo>
            <FooterCopyright>Copyright BikeBus, LLC 2018</FooterCopyright>
            <FooterSocialContainer>
                {SocialList && 
                    SocialList.map((SocialLogo, index) =>
                        singleSocial(SocialLogo, index))
                    }
            </FooterSocialContainer>
            <ScoutTag>Made with Love by Scout</ScoutTag>
        </FooterCompanyInfoContainer>
        <FooterNavContainer>
            <FooterListContainer>
                <ListTitle>About BikeBus</ListTitle>
                <FooterList>
                    <FooterItem><Item>The Experience</Item></FooterItem>
                    {AboutListItems && 
                        AboutListItems.map((AboutListItem, index) =>
                            singleItem(AboutListItem, index))
                    }
                </FooterList>
            </FooterListContainer>
            <FooterListContainer>
                <ListTitle>Our Rides</ListTitle>
                <FooterList>
                    <FooterItem><Item>Corporate</Item></FooterItem>
                    <FooterItem><Item>Private Events</Item></FooterItem>
                    <FooterItem><Item>Special Events</Item></FooterItem>
                    {RideListItems && 
                        RideListItems.map((RideListItem, index) =>
                            singleItem(RideListItem, index))
                    }
                </FooterList>
            </FooterListContainer>
            <FooterListContainer>
                <ListTitle>The Company</ListTitle>
                <FooterList>
                    <FooterItem><Item>Our Story</Item></FooterItem>
                    {CompanyListItems && 
                        CompanyListItems.map((CompanyListItem, index) =>
                            singleItem(CompanyListItem, index))
                    }
                    <FooterItem><Item>Press Releases</Item></FooterItem>
                    <FooterItem><Item>Careers</Item></FooterItem>
                </FooterList>
            </FooterListContainer>
        </FooterNavContainer>
    </FooterContentContainer>
  </FooterContainer>
)

function singleItem(ListItem, index) {
    return (
        <FooterItem key={index}><Item>{ListItem}</Item></FooterItem>
    );
}

function singleSocial(SocialLogo, index) {
    return (
        <SocialLogo key={index}>{SocialLogo}</SocialLogo>
    );
}

export default Footer
