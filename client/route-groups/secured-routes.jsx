import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import LoginPage from '/imports/ui/LoginPage'

var securedRoutes = FlowRouter.group({
  name: 'aeces-member',
})

securedRoutes.route('/dashboard', {
  name: 'Log-In',
  action(){
    mount( App, {
      content: 'User Dashboard'
    })
  }
})

export default securedRoutes