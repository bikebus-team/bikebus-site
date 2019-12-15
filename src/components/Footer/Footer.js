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
import { Link } from "gatsby";
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
                {Info.instagramLink && <Link to={Info.instagramLink}><SocialLogo src={insta} /></Link>}
                {Info.twitterLink && <Link to={Info.twitterLink}><SocialLogo src={twitter} /></Link>}
                {Info.linkedinLink && <Link to={Info.linkedinLink}><SocialLogo src={linkedin} /></Link>}
                {Info.facebookLink && <Link to={Info.facebookLink}><SocialLogo src={fb} /></Link>}
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
