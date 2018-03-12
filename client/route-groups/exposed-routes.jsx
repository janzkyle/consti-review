import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'

import App from '/imports/ui/App'
import LoginPage from '/imports/ui/LoginPage'
import AdminLoginPage from '/imports/ui/AdminLoginPage'
import ForgotPassword from '/imports/ui/ForgotPassword'
import ResetPassword from '/imports/ui/ResetPassword'

var exposedRoutes = FlowRouter.group({
  name: 'public'
})

exposedRoutes.route('/', {
  name: 'Home',
  action(){
    if (Meteor.userId()) {
      FlowRouter.redirect('/dashboard')
    } else {
      FlowRouter.redirect('/login')
    }
  }
})

exposedRoutes.route('/login', {
  name: 'Log-In',
  action(){
    if (Meteor.userId()) {
      FlowRouter.redirect('/dashboard')
    } else {
      mount( App, {
        content: <LoginPage />
      })
    }
  }
})

exposedRoutes.route('/forgot-password', {
  name: 'Forgot Password',
  action(){
    if (Meteor.userId()) {
      FlowRouter.redirect('/dashboard')
    } else {
      mount( App, {
        content: <ForgotPassword />
      })
    }
  }
})


exposedRoutes.route('/reset-password/:token', {
  name: 'Reset Password',
  action(params){
    mount( App, {
      content: <ResetPassword token={params.token}/>
    })
  }
})

exposedRoutes.route('/admin/login', {
  name: 'admin-login',
  action(){
    mount( App, {
      content: <AdminLoginPage />
    })
  }
})

export default exposedRoutes