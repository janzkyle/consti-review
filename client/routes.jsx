import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import LoginForm from '/imports/ui/LoginForm'

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App, {
      content: <Login />
    })
  }
})