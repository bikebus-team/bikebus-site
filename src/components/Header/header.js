import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  HeaderWrapper,
  HeaderLinkGroup,
  HeaderLink,
  HeaderLogo,
  HeaderButton
} from "./headerstyles"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderWrapper>
      <HeaderLogo src="static/img/bikebus_logo.png" />
      <HeaderLinkGroup>
        <HeaderLink href="">Test Link 1</HeaderLink>
        <HeaderLink href="">Test Link 2</HeaderLink>
        <HeaderLink href="">Test Link 3</HeaderLink>
        <HeaderLink href="">Test Link 4</HeaderLink>
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
