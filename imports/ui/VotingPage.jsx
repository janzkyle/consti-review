import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton, TextField } from 'material-ui'
import { grey500, grey700, grey800 } from 'material-ui/styles/colors'

const style = {
  page: {
    fontFamily: "'Roboto Mono', monospace",
    minHeight: "calc(100vh - 100px)"
  },
  formContainer: {
    minHeight: "calc(100vh - 100px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  instructionsHeader: {
    fontWeight: 700,
    margin: "10px 0 10px 0",
    textAlign: "center"
  },
  instructionRow: {
    display: "flex",
    justifyContent: "center",
    color: grey700
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  formInput: {
    underlineStyle: {
      borderColor: grey800
    },
    underlineFocusStyle: {
      borderColor: grey800
    },
    floatingLabelStyle: {
      color: grey800,
    },
    floatingLabelFocusStyle: {
      color: grey800,
    },
    custom: {
      fontFamily: "'Roboto Mono', monospace",
    }
  },
  changeButton: {
    margin: 10  
  },
  divider: {
    backgroundColor: grey500,
    marginBottom: 10,
  }
}

class VotingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: []
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = (key, e) => {
    e.preventDefault()
    this.setState({ [key]: e.target.value })
  }

  handleOnSubmit = () => {
    // @TODO: change password
  }

  render() {
    return(
      <Grid style={style.page}>
        <Row style={style.formContainer}>
          <Col lg={10} md={10} xs={10}>
            <Row style={style.instructionsHeader}> <h1> VOTING </h1> </Row>
            <Divider style={style.divider}/>
          </Col>  
        </Row>
      </Grid>
    )
  }
}

export default VotingPage