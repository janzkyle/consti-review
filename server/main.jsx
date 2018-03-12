import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Email } from 'meteor/email'

import '/imports/api/votes'
import '/imports/api/accounts'

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.emailTemplates.resetPassword.text = (user, url) => {
    url = url.replace('#/', '')
    return " To reset your password, simply click the link below:\n\n" + url
  }
  
  process.env.MAIL_URL = 'smtp://aeces.elections@gmail.com:AECESvotes2018@smtp.gmail.com:587'
})