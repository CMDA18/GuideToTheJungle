// @flow
import React from 'react'
import styled from 'styled-components'
import {
  textStyles
} from '../styles/styleGuide'
import Employee from './Employee'

type IEmployee = {
  image: string,
  metaText: string
}

type IEmployeeCollection = {
  expertise: string,
  text: string,
  employee: Array<IEmployee>
}

type Props = {
  employeeCollection: Array<IEmployeeCollection>
}

const EmployeeCollection = (props: Props) =>
  <Container>
    {(props.employeeCollection || []).map((item, index) => (
      <Container key={index} >
        <Expertise>{item.expertise}</Expertise>
        <Text dangerouslySetInnerHTML={{__html: `${item.text}`}}/>
        {(item.employee || []).map((item, index) => (
          <Employee
            key={index}
            image={item.image}
            metaText={item.metaText}/>
        ))}
      </Container>
    ))}
  </Container>

export default EmployeeCollection

const Container = styled.div`
    margin-bottom: 50px;
`

const Expertise = styled.h3`
  ${textStyles.title};
`

const Text = styled.p`
  ${textStyles.general};
`
