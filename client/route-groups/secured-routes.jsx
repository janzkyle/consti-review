import React from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import Dashboard from '/imports/ui/Dashboard'

var securedRoutes = FlowRouter.group({
  name: 'aeces-member',
})

securedRoutes.route('/dashboard', {
  name: 'User Dashboard',
  action(){
    if (Meteor.userId()) {
      mount( App, {
        content: <Dashboard />,
      })
    } else {
      FlowRouter.go('/login')
    }
  }
})

export default securedRoutes