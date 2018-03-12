import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton, TextField } from 'material-ui'
import { grey500, grey800 } from 'material-ui/styles/colors'

const style = {
  page: {
    fontFamily: "'Roboto Mono', monospace",
  },
  instructionsHeader: {
    fontWeight: 700,
    margin: "50px 0 10px 0",
    textAlign: "center"
  },
  instructionRow: {
    display: "flex",
    justifyContent: "center",
  },
  changePasswordRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  }, 
  formInput: {
    underlineStyle: {
      borderColor: grey800
    },
    underlineFocusStyle: {
      borderColor: grey800
    },
    inputStyle: {
      textAlign: "center",
    },
    hintTextStyle: {
      width: 250,
      textAlign: "center",
    },
    custom: {
      width: 250,
      marginTop: 10,
      textAlign: "center",
      fontFamily: "'Roboto Mono', monospace",
    }
  },
  changeButton: {
    marginLeft: 10
  },
  divider: {
    backgroundColor: grey500,
    marginBottom: 30,
  }
}

class InstructionsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({ password: e.target.value })
  }

  handleOnClick = () => {
    // @TODO: change password
  }

  render() {
    return(
      <Grid style={style.page}>
        <Row>
          <Col lg={8} lgOffset={2} xs={10} xsOffset={1}>
            <Row style={style.instructionsHeader}> <h1> INSTRUCTIONS </h1> </Row>
            <Divider style={style.divider}/>
            <div style={style.instructionRow}>
              <h3 style={{textAlign:"center"}}> 1. Change your password below: </h3>
            </div>
            <Row style={style.changePasswordRow}>
              <div>
                <TextField 
                  type="password"
                  value={this.state.password}
                  hintText="Change Password"
                  style={style.formInput.custom}
                  underlineStyle={style.formInput.underlineStyle}
                  underlineFocusStyle={style.formInput.underlineFocusStyle}
                  onChange={(e) => this.handleOnChange(e)} />
              </div>
              <div>
                <RaisedButton
                  label="Change"
                  style={style.changeButton}
                  primary={true}
                  onClick={() => this.handleOnClick()} />
              </div>
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
        </Row>
      </Grid>
    )
  }
}

export default InstructionsPage