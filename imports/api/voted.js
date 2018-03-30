import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Voted = new Mongo.Collection('voted')

Meteor.methods({
  // User vote
  'voted.insert': () => {
    if (!Meteor.user()) {
      throw new Meteor.Error('not-authorized')
    }
    
    Voted.insert({ user_id: Meteor.userId() })
  }
})