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

const Header = ({ siteTitle }) => (
  <header>
    <HeaderWrapper>
      <HeaderLogo to="/" src="/static/img/bikebus_logo.png" />
      <HeaderLinkGroup>
        <HeaderLink to="/experience/">The Experience</HeaderLink>
        <HeaderLink to="/story/">The Rides</HeaderLink>
        <HeaderLink to="/story/">The Story</HeaderLink>
        <HeaderButton href="">TestButton</HeaderButton>
      </HeaderLinkGroup>
    </HeaderWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TestTitle`,
}

export default Header
