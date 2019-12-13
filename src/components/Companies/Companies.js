import React from "react"
import { getImageUrl } from "takeshape-routing"
import {
  CompaniesContainer,
  CompaniesHeadingContainer,
  CompaniesHeading,
  CompaniesLogosContainer,
  SingleLogoWrapper,
  LogoContainer,
  CompanyLogo,
} from "./CompaniesStyles"

const Companies = ({ heading, companyLogos }) => (
  <CompaniesContainer>
    <CompaniesHeadingContainer>
      <CompaniesHeading>{heading}</CompaniesHeading>
    </CompaniesHeadingContainer>
    <CompaniesLogosContainer>
      {companyLogos.map((companyLogo, index) =>
        singleCompany(companyLogo, index)
      )}
    </CompaniesLogosContainer>
  </CompaniesContainer>
)

function singleCompany(companyLogo, index) {
  const logoPath = companyLogo.logo.path
  const logoAlt =
    companyLogo.logo.caption && companyLogo.logo.caption.blocks[0].text
  return (
    <SingleLogoWrapper key={index}>
      <LogoContainer>
        <CompanyLogo src={getImageUrl(logoPath)} alt={logoAlt} />
      </LogoContainer>
    </SingleLogoWrapper>
  )
}

export default Companies
