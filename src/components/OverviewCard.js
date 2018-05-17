// @flow
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textStyles, colorPalette } from '../styles/styleGuide'
import LabelBestPractice from '../shared/elements/LabelBestPractice'

type Props = {
  slug: string,
  image: string,
  order: number,
  title: string,
  text: string,
  unlockText?: string,
  unlocked: 'yes' | 'no'
}

const OverviewCard = (props: Props) => (
  <Fragment>
    <Card to={props.slug} unlocked={props.unlocked}>
      {props.image &&
        <Wrapper>
          <ImageContainer unlocked={props.unlocked}>
            <Image
              backgroundImage={
                props.image ? props.image : props.image
              }
            />
          </ImageContainer>
          <LabelContainer unlocked={props.unlocked}>
            <LabelBestPractice unlockText={props.unlockText}
            />
          </LabelContainer>
        </Wrapper>
      }
      <TextCard unlocked={props.unlocked}>
        <Module>Module {props.order}</Module>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </TextCard>
    </Card>

  </Fragment>
)

export default OverviewCard

const Module = styled.h2`
  margin-top: 8px;
  margin-bottom: 0;
  transition: color 0.3s ease-in-out;
  ${textStyles.title};
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;
  ${textStyles.title};
`

const Image = styled.div`
  transform: scale(1);
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  backface-visibility: hidden;
  background-position: center center;
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : ''});
  background-size: cover;
  height: 206px;
`

const Wrapper = styled.div`
  transform: translate3d(0, 0, 0);
  overflow: hidden;
`

const Card = styled(Link)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: #ffffff;
  overflow: hidden;
  text-decoration: none;
  pointer-events: ${props => (props.unlocked === 'yes' ? `auto` : `none`)};

  &:hover {
    ${Module} {
      color: ${colorPalette.orange};
    }
    ${Title} {
      color: ${colorPalette.orange};
    }
    ${Image} {
      transform: scale(1.08);
    }
  }
`

const ImageContainer = styled.div`
  transform: translate3d(0, 0, 0);
  border-radius: 4px 4px 0 0;
  height: 206px;
  overflow: hidden;
  opacity: ${props => (props.unlocked === 'yes' ? `1` : `0.5`)};
`

const TextCard = styled.div`
  min-height: 150px;
  background-color: #ffffff;
  padding: 0 16px 0px 16px;
  opacity: ${props => (props.unlocked === 'yes' ? `1` : `0.5`)};
`

const Text = styled.p``

const LabelContainer = styled.div`
  right: -43px;
  top: 55px;
  position: absolute;
  transform: rotate(37deg);
  display: ${props => (props.unlocked === 'yes' ? `none` : `block`)};
`
