import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkerboard from "../components/Checkerboard/checkerboard"
import PageTitle from "../components/PageTitle/pagetitle"
import InstructorsPanel from "../components/InstructorsPanel/instructorspanel"
import HighlightEvent from "../components/HighlightEvent/HighlightEvent"
import styled from 'styled-components'
import { SIZES } from '../tokens';

const MissionStatement = styled(HighlightEvent)`
  margin-top: 128px;
  
  @media (max-width: ${SIZES.BREAK_TABLET}) {
    margin-top: 52px;
  }
`

const Story = ({ data }) => {
  const storydata = data.takeshape.getStory
  // The `what to expect` page
  
  const missionStatement = storydata.mission && storydata.mission.missionStatement;
  return (
    <Layout>
      <PageTitle title={storydata.header.title} />
      <SEO title="Story" />
      <MissionStatement 
        title="Our Mission Statement"
        description={missionStatement}
      />
      {storydata.checkerboardSection.map((cb, index) => (
        <Checkerboard
          key={index}
          imageLeft={index % 2 === 1}
          title={cb.checkerboard.title}
          text={cb.checkerboard.description}
          image={cb.checkerboard.image}
          hasButton={false}
        />
      ))}
      {/* TODO: pull from CMS instructor data
        Use: storydata.instructorSection.instructor
        You can pull normalHeadshot, funHeadshot, name, and title from ^that object */}
      {(storydata.instructorSection.instructors.length > 0
      && storydata.instructorSection.showSection ?
        <InstructorsPanel
        title={storydata.instructorSection.title}
        instructors={storydata.instructorSection.instructors}
      /> :
      null)}
    </Layout>
  )
}

export default Story

export const query = graphql`
  query {
    takeshape {
      getStory {
        _id
       checkerboardSection {
          checkerboard {
            description
            image {
              path
              sourceUrl
              title
            }
            title
          }
        }
        header {
          title
        }
        instructorSection {
          instructors {
            instructor {
              funHeadShot {
                caption
                sourceUrl
                path
              }
              name
              normalHeadShot {
                caption
                sourceUrl
                path
              }
              title
            }
          }
          title
          showSection
        }
        mission {
          missionStatement
        }
      }
    }
  }
`
