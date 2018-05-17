// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textStyles, colorPalette } from '../styles/styleGuide'

type Props = {
  slug: string,
  image: string,
  title: string,
  text: string
}

const OverviewCard = (props: Props) => (
  <Card to={props.slug}>
    {props.image &&
        <ImageContainer>
          <Image
            backgroundImage={
              props.image ? props.image : props.image
            }
          />
        </ImageContainer>
    }
    <TextCard>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </TextCard>
  </Card>
)

export default OverviewCard

const Title = styled.h3`
  margin-top: 8px;
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

const Card = styled(Link)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: #ffffff;
  overflow: hidden;
  text-decoration: none;
  &:hover {
    ${Title} {
      color: ${colorPalette.cobalt};
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
`

const TextCard = styled.div`
  min-height: 150px;
  background-color: #ffffff;
  padding: 0 16px 0px 16px;
`

const Text = styled.p``
