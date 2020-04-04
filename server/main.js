import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Email } from 'meteor/email'
import { Papa } from 'meteor/harrison:papa-parse'

import generator from 'generate-password'
// import dotenv from 'dotenv'

import { Votes } from '/imports/api/votes'
import { Voted } from '/imports/api/voted'
import '/imports/api/accounts'

// dotenv.config({
//   path: Assets.absoluteFilePath('.env')
// })

let csv = Assets.getText('AECESCB1920.csv')
let memberRows = Papa.parse(csv).data

Meteor.startup(() => {
  // fix url reset link bug
  Accounts.emailTemplates.resetPassword.text = (user, url) => {
    url = url.replace('#/', '')
    return " To reset your password, simply click the link below:\n\n" + url
  }

  /*== Mongo Schema Constraints ==*/
  Votes._ensureIndex({ id: 1 }, { unique: true })
  Voted._ensureIndex({ user_id: 1 }, { unique: true })
  /*-- Schema Constraints End --*/

  /*== Candidate Auto Seed ==*/
  const seed = [
    { id: 1, name: 'Approve', votes: 0 },
    { id: 2, name: 'Not Approve', votes: 0 }
  ]

  const isSeeded = Votes.find({ id: { $in : [ 1, 2] } }).count() > 0

  if (!isSeeded) {
    seed.map(vote => {
      Votes.insert(vote)
    })
  }

  /*-- Auto Seed Code End --*/

  // CSV to Accounts and onetime email send
  let lastName, firstName, email, currentMemberRow
  let passwords = generator.generateMultiple(memberRows.length, {
    length: 10,
  })

  for (let i = 0; i < memberRows.length; i++) {
    currentMemberRow = memberRows[i]
    lastName = currentMemberRow[0]
    firstName = currentMemberRow[1]
    email = currentMemberRow[7]
    password = passwords[i]
    
    console.log(`[Member] ${lastName}, ${firstName} | email: ${email} , password: ${password}`)

    try {
      if (!Accounts.findUserByEmail(email)) {
        console.log('Adding to accounts...')
        Accounts.createUser({ email, password })
        console.log('Emailing...')
        Email.send({
          from: 'AECES <aeces.ls@obf.ateneo.edu>',
          to: `${email}`,
          subject: 'AECES 2020 Constitutional Review Credentials',
          text: `Your auto generated password is ${password}. You may login and check the proposed 2020 Constitution at https://aeces-consti.herokuapp.com/ using this email and the generated password. Please do not reply to this email.`
        })
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }
})