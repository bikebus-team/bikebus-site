import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"

import { BBh2, BBp } from "../components/Base/fonts"
import { darkGreen } from "../components/Base/colors"
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

const TEMP_CONTENT = () => (
  <>
    <PressSection>
      <SectionTitle>Featured Recently</SectionTitle>
      <PressCardContainer>
        {[0, 0, 0, 0, 0].map(() => (
          <PressCard
            link=""
            logo=""
            title="Biking On A Bus Is A Thing Now"
            date="August 24th, 2017"
            body="A brief excerpt from or description from the thing so there is
            context. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        ))}
      </PressCardContainer>
    </PressSection>

    <PressSection>
      <SectionTitle>Awards</SectionTitle>
      <PressCardContainer>
        {[0, 0].map(() => (
          <PressCard
            link=""
            logo=""
            title="Biking On A Bus Is A Thing Now"
            date="August 24th, 2017"
            body="A brief excerpt from or description from the thing so there is
            context. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        ))}
      </PressCardContainer>
    </PressSection>
  </>
)

const PressPage = ({ data }) => {
  // const { getFaq } = data.takeshape
  return (
    <Layout>
      <SEO title="Press Releases" />
      <ExtraPageLayout header="Press Releases" fullWidth={true}>
        <TEMP_CONTENT />
      </ExtraPageLayout>
    </Layout>
  )
}

export default PressPage

// export const query = graphql`
//   query {
//     takeshape {
//       getFaq {
//         _id
//         sections {
//           section {
//             questions {
//               item {
//                 answer
//                 question
//               }
//             }
//             title
//           }
//         }
//       }
//     }
//   }
// `
