import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'

var securedRoutes = FlowRouter.group({
  name: 'aeces-member',
})

securedRoutes.route('/dashboard', {
  name: 'User Dashboard',
  action(){
    mount( App, {
      content: 'User Dashboard'
    })
  }
})

export default securedRoutes