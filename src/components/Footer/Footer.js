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
    FooterLink,
    ScoutLink,
    Item
    }
  from "./FooterStyles"
import { OutsideLink } from "../Base/basecomponents"
import * as insta from "../../images/instagram.svg"
import * as twitter from "../../images/twitter.svg"
import * as linkedin from "../../images/linkedin.svg"
import * as fb from "../../images/facebook.svg"
import { getImageUrl } from "takeshape-routing";

const Footer = ({ Info, AboutListItems, RideListItems, CompanyListItems }) => (
  <FooterContainer>
    <FooterContentContainer>
        <FooterCompanyInfoContainer>
            <FooterLogo src={getImageUrl(Info.logo.path)}></FooterLogo>
            <FooterCopyright>{Info.copyrightInformation}</FooterCopyright>
            <FooterSocialContainer>
                {Info.instagramLink && <OutsideLink target="_blank" href={Info.instagramLink}><SocialLogo src={insta} /></OutsideLink>}
                {Info.twitterLink && <OutsideLink target="_blank" href={Info.twitterLink} ><SocialLogo src={twitter} /></OutsideLink>}
                {Info.linkedinLink && <OutsideLink target="_blank" href={Info.linkedinLink}><SocialLogo src={linkedin} /></OutsideLink>}
                {Info.facebookLink && <OutsideLink target="_blank" href={Info.facebookLink}><SocialLogo src={fb} /></OutsideLink>}
            </FooterSocialContainer>
            <ScoutLink href="https://web.northeastern.edu/scout/" target="_blank"><ScoutTag>Made with ♥ by Scout</ScoutTag></ScoutLink>
        </FooterCompanyInfoContainer>
        <FooterNavContainer>
            <FooterListContainer>
                <ListTitle>About BikeBus</ListTitle>
                <FooterList>
                    {AboutListItems.links && 
                        AboutListItems.links.map((AboutListItem, index) =>
                            singleItem(AboutListItem, index))
                    }
                </FooterList>
            </FooterListContainer>
            <FooterListContainer>
                <ListTitle>Our Rides</ListTitle>
                <FooterList>
                    {RideListItems.links && 
                        RideListItems.links.map((RideListItem, index) =>
                            singleItem(RideListItem, index))
                    }
                </FooterList>
            </FooterListContainer>
            <FooterListContainer>
                <ListTitle>The Company</ListTitle>
                <FooterList>
                    {CompanyListItems.links && 
                        CompanyListItems.links.map((CompanyListItem, index) =>
                            singleItem(CompanyListItem, index))
                    }
                </FooterList>
            </FooterListContainer>
        </FooterNavContainer>
    </FooterContentContainer>
  </FooterContainer>
)

function singleItem(ListItem, index) {
    const destLink = ListItem.link.url;
    const name = ListItem.link.title;
    return (
        <FooterItem key={index}><FooterLink to={destLink}><Item>{name}</Item></FooterLink></FooterItem>
    );
}
export default Footer
