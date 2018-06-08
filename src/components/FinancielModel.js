// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles,
  colorPalette
} from '../styles/styleGuide'

type IModel = {
  subTitle?: string,
  color: string,
  round: string,
  metadata?: string
}

type Props = {
  subTitle?: string,
  model: Array<IModel>
}

const FinancielModel = (props: Props) =>
  <Container>
    <Title>{props.subTitle}</Title>
    <ModelWrapper>
      {props.model.map((item, index) => (
        <Wrapper key={index}>
          <SubTitle>{item.subTitle}</SubTitle>
          <Round backgroundColor={item.color} >
            <Text>{item.round}</Text>
          </Round>
          <Metadata>{item.metadata}</Metadata>
        </Wrapper>
      ))}

    </ModelWrapper>
  </Container>

export default FinancielModel

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
`
const Title = styled.h2`
  ${textStyles.subTitle};
`

const ModelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
}
`
const Wrapper = styled.div`
`
const SubTitle = styled.h3`
  ${textStyles.subTitle};
  font-size: 20px;
  line-height: 32px;
`
const Round = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: #${props =>
    props.backgroundColor ? props.backgroundColor : ''};
`

const Text = styled.p`
  text-align: center;
  margin: auto;
  padding-top: 90px;
  color: ${colorPalette.white};
`
const Metadata = styled.div`
  ${textStyles.general};
  text-align: center;
  width: 200px;
`
