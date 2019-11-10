import PropTypes from "prop-types"
import React from "react"
import { PageTitleWrapper, TextWrapper } from "./pagetitlestyles"

const PageTitle = ({ title }) => (
    <PageTitleWrapper>
        <TextWrapper>
            <h1>{title}</h1>
        </TextWrapper>
    </PageTitleWrapper>
);

PageTitle.propTypes = {
    title: PropTypes.string,
}

PageTitle.defaultProps = {
    title: ""
}

export default PageTitle