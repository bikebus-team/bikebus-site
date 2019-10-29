import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  HeaderWrapper,
  HeaderLinkGroup,
  HeaderLink,
  HeaderLogo,
  HeaderButton,
} from "./headerstyles"
import * as logo from "../../images/bikebus_logo.png";

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src={logo} />
      </Link>
      <HeaderLinkGroup>
        <HeaderLink to="/experience/">The Experience</HeaderLink>
        <HeaderLink to="/story/">The Rides</HeaderLink>
        <HeaderLink to="/story/">The Story</HeaderLink>
        <HeaderButton href="">TestButton</HeaderButton>
      </HeaderLinkGroup>
    </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TestTitle`,
}

export default Header
