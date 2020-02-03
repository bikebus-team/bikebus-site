import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"

import { BBh2 } from "../components/Base/fonts"
import { SIZES } from "../tokens"
import PressCard from "../components/Press/PressCard"

const PressSection = styled.div`
  & + & {
    margin-top: 120px;
    @media (max-width: ${SIZES.BREAK_TABLET}) {
      margin-top: 100px;
    }

    @media (max-width: ${SIZES.BREAK_MOBILE}) {
      margin-top: 80px;
    }
  }
`

const SectionTitle = styled(BBh2)`
  margin-top: 0;
  margin-bottom: 40px;
`

const PressCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -3.33%;
`

const PressPage = ({ data }) => {
  const { getPressRelease } = data.takeshape
  const { pressSection } = getPressRelease
  return (
    <Layout>
      <SEO title="Press Releases" />
      <ExtraPageLayout header="Press Releases" fullWidth={true}>
        {pressSection.map(({ title, list }, indexI) => {
          return (
            <PressSection key={indexI}>
              <SectionTitle>{title}</SectionTitle>
              <PressCardContainer>
                {list.map(({ releaseItem }, indexJ) => {
                  const { title, companyLogo, link, excerpt } = releaseItem || '';
                  const date = new Date(releaseItem.date)
                  return (
                    <PressCard
                      key={indexJ}
                      link={link}
                      logo={companyLogo}
                      title={title}
                      date={`${date.toLocaleDateString("en")}`}
                      body={excerpt}
                    />
                  )
                })}
              </PressCardContainer>
            </PressSection>
          )
        })}
      </ExtraPageLayout>
    </Layout>
  )
}

export default PressPage

export const query = graphql`
  query {
    takeshape {
      getPressRelease {
        pressSection {
          title
          list {
            releaseItem {
              title
              excerpt
              companyLogo {
                path
                caption
              }
              link
              date
            }
          }
        }
      }
    }
  }
`
