// @flow
import React from 'react'
import styled from 'styled-components'

type PlusSignProps = {
  color?: string
}

const defaultProps = {}

const PlusSign = (props: PlusSignProps) => (
  <Plus width="32px" height="34px" viewBox="0 0 32 34" version="1.1">
    <g id="V.06" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
      <g id="0.0-FAQ-" transform="translate(-1363.000000, -464.000000)" stroke="#FFA000" strokeWidth="2">
        <g id="Group" transform="translate(352.000000, 459.000000)">
          <g id="Group-Copy-10" transform="translate(1012.000000, 6.000000)">
            <g id="Group-11">
              <path d="M15,0 L15,32" id="Line-4"></path>
              <path d="M30,16 L0,16" id="Line-5"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </Plus>

)
PlusSign.defaultProps = defaultProps

export default PlusSign

const Plus = styled.svg`
  display: block;
`
