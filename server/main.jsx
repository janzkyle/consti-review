import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Email } from 'meteor/email'

import { Votes } from '/imports/api/votes'
import { Voted } from '/imports/api/voted'
import '/imports/api/accounts'

Meteor.startup(() => {
  // fix url reset link bug
  Accounts.emailTemplates.resetPassword.text = (user, url) => {
    url = url.replace('#/', '')
    return " To reset your password, simply click the link below:\n\n" + url
  }
  
  // Set mailing smtp server
  process.env.MAIL_URL = 'smtp://aeces.elections@gmail.com:AECESvotes2018@smtp.gmail.com:587'

  /*== Mongo Schema Constraints ==*/
  Votes._ensureIndex({ id: 1 }, { unique: true })
  Voted._ensureIndex({ user_id: 1 }, { unique: true })
  /*-- Schema Constraints End --*/

  /*== Candidate Auto Seed ==*/
  const seed = [
    { id: 1, name: 'Al Bontogon', votes: 0 },
    { id: 2, name: 'Abstain-President', votes: 0 },
    { id: 3, name: 'Nica Medrano', votes: 0 },
    { id: 4, name: 'Abstain-EVP', votes: 0 },
    { id: 5, name: 'Jonathan Ventura', votes: 0 },
    { id: 6, name: 'Abstain-SecGen', votes: 0 },
    { id: 7, name: 'Lester Violeta', votes: 0 },
    { id: 8, name: 'Abstain-FinOfficer', votes: 0 },
    { id: 9, name: 'Shaina Loria', votes: 0 },
    { id: 10, name: 'Abstain-VP_EA', votes: 0 }
  ]

  const isSeeded = Votes.find({ id: { $in : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] } }).count() > 0

  if (!isSeeded) {
    seed.map(vote => {
      Votes.insert(vote)
    })
  }
  /*-- Auto Seed Code End --*/
})