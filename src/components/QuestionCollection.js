// @flow
import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
// import {
//   textStyles,
//   colorPalette
// } from '../styles/styleGuide'
import QuestionFAQ from './QuestionFAQ'
import AnswerFAQ from './AnswerFAQ'

type IQuestions = {
  question: string,
  answer: string
}

type Props = {
  questions: Array<IQuestions>
}
type State = {
  showAnswer: boolean
}

class QuestionCollection extends Component<Props, State> {
  state = {
    showAnswer: false
  }

  toggle = () => {
    this.setState({showAnswer: !this.state.showAnswer})
  }

  render () {
    const props = this.props

    return (
      <Container>
        {(props.questions || []).map((item, index) => (
          <Button key={index} onClick={this.toggle}>

            {this.state.showAnswer ? (
              <Fragment>
                <QuestionFAQ state='open' {...item} />
                <AnswerFAQ {...item}/>
              </Fragment>
            )
              : <QuestionFAQ state='close' {...item} />
            }

          </Button>
        ))}

      </Container>
    )
  }
}
export default QuestionCollection

const Container = styled.div`
  
`

const Button = styled.a`
  
`
