// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { RedirectWithStatus } from '../../lib/routing'
import { paths } from '../../routes'

type Props = {
  test: string
}

class RedirectToHome extends Component<Props> {
  render () {
    return (
      <div className='RedirectToHome' data-test={this.props.test}>
        <Helmet
          title='RedirectToHome'
        />
        <RedirectWithStatus status={302} to={paths.home} />
      </div>
    )
  };
}

export default RedirectToHome
