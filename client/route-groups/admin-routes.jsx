import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import LoginPage from '/imports/ui/LoginPage'

var adminRoutes = FlowRouter.group({
  name: 'admin',
  prefix: '/admin',
})

adminRoutes.route('/dashboard', {
  name: 'Log-In',
  action(){
    mount( App, {
      content: 'Admin Dashboard'
    })
  }
})

export default adminRoutes