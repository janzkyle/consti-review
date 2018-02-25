import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// App component - represents the whole app
class App extends Component { 
  constructor(props) {
    super(props)
  }

  render() {  
    return (
      <MuiThemeProvider>
        <div> { this.props.content } </div>
      </MuiThemeProvider>
    )
  }
}

export default App

  // db.votes.insert({ voter_id:132694, position:"PRESIDENT", candidate_id: 1, createdAt: new Date() });
