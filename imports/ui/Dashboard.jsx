import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { white, yellow300, grey800 } from 'material-ui/styles/colors'
import { Grid, Row, Col } from 'react-bootstrap'

import NavBar from './NavBar'
import VotingPage from './VotingPage'
import Footer from './Footer'

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
        <VotingPage />
        <Footer />
      </div>
    )
  }
}

export default Dashboard
