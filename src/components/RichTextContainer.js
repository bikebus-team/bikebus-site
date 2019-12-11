import styled from "styled-components"
import { richBlack, darkGreen } from "../components/Base/colors"

const RichTextContainer = styled.div`
  color: ${richBlack};

  h1 {
    font-family: "Noto Sans Semicondensed", sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 36px;
  }

  h2 {
    font-family: "Noto Sans Semicondensed", sans-serif;
    font-size: 2.25em;
    margin-bottom: 24px;

    &:not(:first-child) {
      margin-top: 80px;
    }
  }

  h3 {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 20px;

    &:not(:first-child) {
      margin-top: 40px;
    }
  }

  p,
  li {
    font-family: "Noto Sans", sans-serif;
    font-size: 1em;
  }

  ul {
    padding-inline-start: 24px;
  }

  li {
    padding-left: 8px;
    & + li {
      margin-top: 0.5em;
    }
  }

  a {
    color: ${darkGreen};
    text-decoration: underline;
  }
`

export default RichTextContainer
