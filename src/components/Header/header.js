import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  HeaderWrapper,
  HeaderLinkGroup,
  HeaderLink,
  HeaderLogo,
  HeaderButton,
  HeaderContainer,
  HeaderPage,
} from "./headerstyles"
import * as logo from "../../images/bikebus_logo.png";

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <Link to="/" style={{lineHeight: 0}}>
        <HeaderLogo src={logo} />
      </Link>
      <HeaderLinkGroup>
        <HeaderLink to="/experience/"><HeaderPage>The Experience</HeaderPage></HeaderLink>
        <HeaderLink to="/corporate/"><HeaderPage>Corporate</HeaderPage></HeaderLink>
        <HeaderLink to="/private/"><HeaderPage>Private Groups</HeaderPage></HeaderLink>
        <HeaderLink to="/story/"><HeaderPage>Our Story</HeaderPage></HeaderLink>
        <HeaderButton to="/">Request a Quote</HeaderButton>
      </HeaderLinkGroup>
    </HeaderWrapper>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TestTitle`,
}

export default Header
