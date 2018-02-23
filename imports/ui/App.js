import React, { Component } from 'react'

import { withTracker } from 'meteor/react-meteor-data'

// App component - represents the whole app
class App extends Component { 
  render() {  
    return (
      <div> Test </div>
    )
  }
}

export default withTracker(() => {
  return {
    votes: Votes.find({}).fetch(),
  }
  })(App)

  // db.votes.insert({ voter_id:132694, position:"PRESIDENT", candidate_id: 1, createdAt: new Date() });
