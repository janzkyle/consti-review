import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'

import { Row } from 'react-bootstrap'
import { TextField } from 'material-ui'

const Logo = (props) => {
  return(
    <div id="logo-container-left" onClick={() => FlowRouter.redirect('/')}>
      <div id="logo-container-right">
        <h1 id="logo"> AECES Comelec </h1>
      </div>
    </div>
  )
}

export default Logo