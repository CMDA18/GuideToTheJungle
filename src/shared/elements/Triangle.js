// @flow
import React from 'react'
import styled from 'styled-components'

type TriangleProps = {
  color?: string
}

const defaultProps = {}

const Triangle = (props: TriangleProps) => (
  <Container width="432px" height="392px" viewBox="0 0 432 392" version="1.1">
    <g id="V.06" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="0.4-How-We-Work-Copy" transform="translate(-967.000000, -664.000000)" fill="#FFA000">
        <g id="Group" transform="translate(856.000000, 523.000000)">
          <polygon id="Triangle-3-Copy-7" transform="translate(271.500000, 277.500000) rotate(24.000000) translate(-271.500000, -277.500000) " points="473 64 420.108617 491 70 218.438346"></polygon>
        </g>
      </g>
    </g>
  </Container>

)
Triangle.defaultProps = defaultProps

export default Triangle

const Container = styled.svg`
  display: block;
`
