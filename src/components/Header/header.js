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
      <Link to="/" style={{lineHeight: 0}}>
        <HeaderLogo src={logo} />
      </Link>
      <HeaderLinkGroup>
        <HeaderLink to="/experience/">The Experience</HeaderLink>
        <HeaderLink to="/corporate/">Corporate</HeaderLink>
        <HeaderLink to="/private/">Private Groups</HeaderLink>
        <HeaderLink to="/story/">Our Story</HeaderLink>
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
