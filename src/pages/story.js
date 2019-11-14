import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkerboard from "../components/Checkerboard/checkerboard"
import PageTitle from "../components/PageTitle/pagetitle"
import InstructorsPanel from "../components/InstructorsPanel/instructorspanel"

const mockJSONData = {
  data: {
    pageTitle: "OUR STORY",
    checkerboards: [
      {
        title: "Title1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Title2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Title3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    instructorsTitle: "Meet our Instructors!"
  }
}

const Story = ({data}) => {
  const storydata = data.takeshape.getStory;
  // The `what to expect` page
  return (
  <Layout>
    <PageTitle title={storydata.header.title} />
    <SEO title="Story" />
    {storydata.checkerboardSection.map((cb, index) => 
      <Checkerboard 
        key={index} 
        imageLeft={index % 2 === 1} 
        title={cb.checkerboard.title} 
        text={cb.checkerboard.description} 
        imageSrc={cb.checkerboard.image.path}
        hasButton={false} />)}
        {/* TODO: pull from CMS instructor data
        Use: storydata.instructorSection.instructor
        You can pull normalHeadshot, funHeadshot, name, and title from ^that object */}
    <InstructorsPanel title={mockJSONData.data.instructorsTitle}/>
  </Layout>
  )
}

export default Story

export const query = graphql`
  query {
    takeshape {
      getStory {
        checkerboardSection {
          checkerboard {
            image {
              description
              path
              sourceUrl
            }
            description
            title
          }
        }
        header {
          title
        }
        instructorSection {
          instructor {
            funHeadShot {
              description
              path
              sourceUrl
            }
            name
            normalHeadShot {
              description
              path
              sourceUrl
            }
            title
          }
        }
        misison {
          missionStatement
        }
      }
    }
  }
`