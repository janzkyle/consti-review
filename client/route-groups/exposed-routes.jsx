import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import LoginPage from '/imports/ui/LoginPage'

var exposedRoutes = FlowRouter.group({
  name: 'public'
})

exposedRoutes.route('/', {
  name: 'Home',
  action(){
    mount( App, {
      content: 'Home Page'
    })
  }
})

exposedRoutes.route('/login', {
  name: 'Log-In',
  action(){
    mount( App, {
      content: <LoginPage />
    })
  }
})

export default exposedRoutes