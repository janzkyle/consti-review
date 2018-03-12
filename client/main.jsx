import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'

import App from '/imports/ui/App'

Meteor.startup(() => {
  Accounts.onResetPasswordLink((token, done) => {
    FlowRouter.redirect('/reset-password/' + token)
    done()
  })

  render(<App />, document.getElementById('render-target'))
})
