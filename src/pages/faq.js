import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"

import Accordion from "../components/FAQ/Accordion"
import { BBh2, BBp } from "../components/Base/fonts"
import { SIZES } from "../tokens"

const FAQSection = styled.div`
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

const FAQPage = ({ data }) => {
  const { getFaq } = data.takeshape
  const { sections } = getFaq
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <ExtraPageLayout header="Frequently Asked Questions">
        {sections.map(({ section }, indexI) => {
          return (
            <FAQSection key={indexI}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.questions.map(({ item }, indexJ) => (
                <Accordion
                  key={indexJ}
                  idKey={`${indexI}-${indexJ}`}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </FAQSection>
          )
        })}
      </ExtraPageLayout>
    </Layout>
  )
}

export default FAQPage

export const query = graphql`
  query {
    takeshape {
      getFaq {
        _id
        sections {
          section {
            questions {
              item {
                answer
                question
              }
            }
            title
          }
        }
      }
    }
  }
`
