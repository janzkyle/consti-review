import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
import { Voted }  from './voted'

export const Votes = new Mongo.Collection('votes')

Meteor.methods({
  // User vote
  'votes.insert': (votes) => {
    if (!Meteor.user()) {
      throw new Meteor.Error('not-authorized')
    }

    if (Voted.findOne({ user_id: Meteor.userId() })) {
      throw new Meteor.Error('already-voted')
    } else {
      console.log(votes)
      votes.map(id => {
        id = parseInt(id)
        Votes.update({ id }, { $inc: { votes: 1 } })
      })
    }
  }
})
