// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'
import { fromBreakpoint } from '../styles/breakpoints'

type ITextMedia = {
  title: string,
  text: string
}

type Props = {
  imageAlignment: string,
  textMedia: Array<ITextMedia>,
  image: string,
  mediaCaption: string
}

const TextAndImage = (props: Props) => {
  return (
    <Container imageAlignment={props.imageAlignment}>
      <TextContainer imageAlignment={props.imageAlignment}>
        {(props.textMedia || []).map((item, index) => (
          <Wrapper key={index} >
            <Title>{item.title}</Title>
            <Text>
              {item.text}
            </Text>
          </Wrapper>
        ))}
      </TextContainer>
      <ImageContainer imageAlignment={props.imageAlignment}>
        <Media
          backgroundImage={props.image ? props.image : props.image}
        />
        <Caption>{props.mediaCaption}</Caption>
      </ImageContainer>

    </Container>
  )
}

export default TextAndImage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: flex-start;
  flex-direction: row;
`

const TextContainer = styled.div`
${fromBreakpoint.lg`
    width: 600px;
    flex-shrink: 0;

${props =>
    props.imageAlignment === 'left'
      ? `
    order: 2;
    margin-left: 50px;
  `
      : `
    order: 1;
    margin-right: 50px;
`}
`};
`

const Wrapper = styled.div`
  margin-bottom: 50px;
`

const Title = styled.h1`
  ${textStyles.title};
`

const Text = styled.p`
  margin-top: 0;
  transition: color 0.3s ease-in-out;
  color: ${colorPalette.blue};
  ${textStyles.general};
  margin-bottom: -20px;
`

const ImageContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${fromBreakpoint.lg`
  order: ${props =>
    props.imageAlignment === 'left'
      ? `
        1;
      `
      : `
        2;
        `}
  `};
`

const Media = styled.div`
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ''});
  background-size: cover;
  width: 600px;
  height: 300px;
`

const Caption = styled.p`
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin-top: 12px;
  color: ${colorPalette.blue};
`