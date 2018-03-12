import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { Tabs, Tab } from 'material-ui'
import { white, yellow300, grey800 } from 'material-ui/styles/colors'
import { Grid, Row, Col } from 'react-bootstrap'
import SwipeableViews from 'react-swipeable-views'

import NavBar from './NavBar'
import InstructionsPage from './InstructionsPage'

const style = {
  page: {
    minHeight: '100vh',
    padding: 0,
    backgroundColor: white,
  },
  tabStyle: {
    backgroundColor: yellow300,
    color: grey800,
    fontFamily: "'Roboto Mono', monospace",
  }
}

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0,
    }
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Instructions" value={0} style={style.tabStyle} />
          <Tab label="Vote" value={1} style={style.tabStyle} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange} >
          <div> <InstructionsPage /> </div>
          <div> slide n°2 </div>
        </SwipeableViews>
      </div>
    )
  }
}

export default Dashboard

// export default withTracker(() => {
//   return {
//     users: Meteor.users.find({}).fetch,
//   }
// })(Dashboard)

// db.votes.insert({ voter_id:132694, position:"PRESIDENT", candidate_id: 1, createdAt: new Date() });
