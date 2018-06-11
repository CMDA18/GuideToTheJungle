// @flow
import React from 'react'
import styled from 'styled-components'
import {
  colorPalette
} from '../styles/styleGuide'
import ButtonPrimary from '../shared/buttons/ButtonPrimary'

type Props = {
  introTitle: string,
  introText: string
}

const Login = (props: Props) =>
  <Container>
    <LoginContainer>
      <Wrapper>
        <NameLabel> Naam: </NameLabel>
        <NameInput type="text" placeholder="Naam Achternaam"/>
      </Wrapper>
      <Wrapper>
        <DateLabel>Startdatum:</DateLabel>
        <DateInput type="date"/>
      </Wrapper>
      <ButtonWrapper>
        <ButtonPrimary
          type='internalLink'
          label='Ontdenk onze Jungle'
          route='/overview'
        />
      </ButtonWrapper>
    </LoginContainer>
  </Container>

export default Login

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginContainer = styled.div`
  margin-top: 450px;
`

const Wrapper = styled.div`
  display: flex;
`

const NameLabel = styled.label`
  width: 120px;
`

const NameInput = styled.input`
  color: #757575;
  outline: none;
  border: none;
  width: 300px;
  display: block;
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #CCD4DB;
  margin-bottom: 10px;

  &:-webkit-autofill {
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 0 0px 9999px white;
  }
  &:focus,
  &:-webkit-autofill:focus {
    border-color: ${colorPalette.orange};
  }

`

const DateLabel = styled.label`
  width: 120px;
`

const DateInput = styled.input`
  color: #757575;
  outline: none;
  border: none;
  width: 300px;
  display: block;
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #CCD4DB;
  &:-webkit-autofill {
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 0 0px 9999px white;
  }
  &:focus,
  &:-webkit-autofill:focus {
    border-color: ${colorPalette.orange};
  }
  &:invalid {
    border: 1px solid red
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  margin: 50px auto 0;
  justify-content: center;
`
