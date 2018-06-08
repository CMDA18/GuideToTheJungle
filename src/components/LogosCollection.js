// @flow
import React from 'react'
import styled from 'styled-components'
import Employee from './Employee'

type ILogos = {
  image: string,
  metaText: string
}

type ILogosCollection = {
  text: string,
  logos: Array<ILogos>
}

type Props = {
  logosCollection: Array<ILogosCollection>
}

const LogosCollection = (props: Props) =>
  <Container>
    {(props.logosCollection || []).map((item, index) => (
      <Employee
        key={index}
        image={item.image}
        metaText={item.metaText}/>
    ))}
  </Container>

export default LogosCollection

const Container = styled.div`
    margin-bottom: 50px;
`
