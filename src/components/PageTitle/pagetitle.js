import PropTypes from "prop-types"
import React from "react"
import { PageTitleWrapper, TextWrapper, Title } from "./pagetitlestyles";

const PageTitle = ({ title }) => (
    <PageTitleWrapper>
        <Title>{title}</Title>
    </PageTitleWrapper>
);

PageTitle.propTypes = {
    title: PropTypes.string,
}

PageTitle.defaultProps = {
    title: ""
}

export default PageTitle