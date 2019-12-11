import React from "react"
import styled, { css } from "styled-components"
import AnimateHeight from "react-animate-height"
import { BBh3, BBp } from "../Base/fonts"
import { darkGreen } from "../Base/colors"
import { SIZES } from "../../tokens"

const Wrapper = styled.div`
  border-bottom: 2px solid ${darkGreen};
  padding-bottom: 30px;
  width: 100%;

  & + & {
    margin-top: 30px;
  }
`

const TitleButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  cursor: pointer;
`

const Content = styled(AnimateHeight)`
  & > p {
    margin: 0;

    & + p {
      margin-top: 20px;
    }
  }
`

const AnswerPara = styled(BBp)`
  margin: 0;
  margin-top: 18px;
`

const Title = styled(BBh3)`
  flex: 1;
  margin: 0;
  font-size: 24px;
  font-family: "Noto Sans";
  font-weight: 500;
  text-align: left;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    font-size: 20px;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    font-size: 18px;
  }
`

const PlusMinus = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  flex-shrink: 0;
  margin-left: 16px;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: ${darkGreen};
  }

  &::before {
    transform: rotate(0deg);
  }
  &::after {
    transition-timing-function: ease-in-out;
    transition-duration: 150ms;
    transition-property: transform;
    transform: rotate(${({ open }) => (open ? "0deg" : "-90deg")});
  }
`

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { question, answer, idKey: key } = this.props
    const id = `faq-item-${key}`

    return (
      <Wrapper>
        <TitleButton
          onClick={this.toggleOpen}
          aria-controls={id}
          aria-expanded={this.state.open}
          id={`accordion-${id}`}
        >
          <Title>{question}</Title>
          <PlusMinus open={this.state.open} />
        </TitleButton>
        <Content
          duration={250}
          height={this.state.open ? "auto" : 0}
          animateOpacity={true}
          open={this.state.open}
          aria-hidden={!this.state.open}
          id={id}
          ease="ease-in-out"
        >
          <AnswerPara>{answer}</AnswerPara>
        </Content>
      </Wrapper>
    )
  }
}

export default Accordion
