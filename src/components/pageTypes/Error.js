// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'

type Props = {
  test: string
}

class Error extends Component<Props> {
  render () {
    return (
      <div className='Error' data-test={this.props.test}>
        <Helmet
          title='Oeps!'
        />
        <header className='Error-header'>
          <h1 className='Error-title'>Welcome to React</h1>
        </header>
        <p className='Error-intro'>
          To get started, edit <code>src/Error.js</code> and save to reload.
        </p>
      </div>
    )
  };
}

export default Error
