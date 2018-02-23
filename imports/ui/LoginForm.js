import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import { withTracker } from 'meteor/react-meteor-data'
// App component - represents the whole app
class LoginForm extends Component { 
  render() {
    return (
      <form>
        <label> Username </label>
        <input />
        <label> Password </label>
        <input type="password" />
      </form>
    )
  }
}

export default withTracker(() => {
  return {
    users: Meteor.users.find({}).fetch,
  }
})(LoginForm)

// db.votes.insert({ voter_id:132694, position:"PRESIDENT", candidate_id: 1, createdAt: new Date() });
