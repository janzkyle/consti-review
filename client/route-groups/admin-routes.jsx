import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'

var adminRoutes = FlowRouter.group({
  name: 'admin',
  prefix: '/admin',
})

adminRoutes.route('/dashboard', {
  name: 'admin-dashboard',
  action(){
    mount( App, {
      content: 'Admin Dashboard'
    })
  }
})

export default adminRoutes