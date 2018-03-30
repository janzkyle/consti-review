import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton, TextField, Snackbar } from 'material-ui'
import { grey500, grey700, grey800 } from 'material-ui/styles/colors'

const style = {
  page: {
    fontFamily: "'Roboto Mono', monospace",
    marginBottom: 25,
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  instructionsHeader: {
    fontWeight: 700,
    margin: "25px 0 10px 0",
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

class InstructionsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      open: false,
      message: "",
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
    Accounts.changePassword(this.state.oldPassword, this.state.newPassword, (err) => {
      if (err) {
        this.setState({
            message: "Error changing password"
          }, () => {
            this.setState({ open: true, })
            throw err
          })
      } else {
        this.setState({
            message: "Successfully changed password"
          }, () => {
            this.setState({ open: true, })
          })
      }
    })
  }

  handleRequestClose = () => {
    this.setState({ open: false, })
  }

  render() {
    return(
      <Grid style={style.page}>
        <Row style={style.formContainer}>
          <Col lg={8} md={10} xs={10}>
            <Row style={style.instructionsHeader}> <h1> INSTRUCTIONS </h1> </Row>
            <Divider style={style.divider}/>
            <div style={style.instructionRow}>
              <h3 style={{textAlign:"center"}}> 1. Change your password below: </h3>
            </div>
            <Row style={style.instructionRow}>
              <TextField 
                type="password"
                value={this.state.oldPassword}
                floatingLabelText="Old Password"
                style={style.formInput.custom}
                underlineStyle={style.formInput.underlineStyle}
                underlineFocusStyle={style.formInput.underlineFocusStyle}
                floatingLabelStyle={style.formInput.floatingLabelStyle}
                floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle}
                onChange={(e) => this.handleOnChange("oldPassword", e)} />
            </Row>
            <Row style={style.instructionRow}>
              <TextField 
                type="password"
                value={this.state.newPassword}
                floatingLabelText="New Password"
                style={style.formInput.custom}
                underlineStyle={style.formInput.underlineStyle}
                underlineFocusStyle={style.formInput.underlineFocusStyle}
                floatingLabelStyle={style.formInput.floatingLabelStyle}
                floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle}
                onChange={(e) => this.handleOnChange("newPassword", e)} />
            </Row>
            <Row style={style.buttonRow}>
              <RaisedButton
                label="Change"
                style={style.changeButton}
                primary={true}
                onClick={() => this.handleOnSubmit()} />
            </Row>
            <Row style={style.instructionRow}>
              <h3 style={{textAlign:"center"}}> 2. Please tick the candidate you are voting for </h3>
            </Row>
            <Row style={style.instructionRow}>
              <h3 style={{textAlign:"center"}}> 3. Double check your vote before submitting! </h3>
            </Row>
            <Row style={style.instructionRow}>
              <h3 style={{textAlign:"center"}}> 4. Hit <strong>Submit</strong>! </h3>
            </Row>
          </Col>
          <Snackbar
            open={this.state.open}
            message={this.state.message}
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose}
          />
        </Row>
      </Grid>
    )
  }
}

export default InstructionsPage