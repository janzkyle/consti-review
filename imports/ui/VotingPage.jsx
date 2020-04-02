import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton, Dialog, Checkbox } from 'material-ui'
import { grey500, grey700, grey800 } from 'material-ui/styles/colors'

import VotingRow from './VotingRow'

const style = {
  page: {
    fontFamily: "'Roboto Mono', monospace",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  pageHeader: {
    fontWeight: 700,
    margin: "0 0 10px 0",
    textAlign: "center"
  },
  instructionRow: {
    display: "flex",
    justifyContent: "center",
    color: grey700
  },
  buttonRow: {
    display: "flex",
    alignItems: "center",
    height: 100,
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
    marginTop: 15,
    marginBottom: 15,
  }
}
const candidates = {
  choices: [
    {
      id: 1,
      name: 'I approve of the changes made.',
    },
    {
      id: 2,
      name: 'I do not approve of the changes made.',
    },
  ],
}
class VotingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: null,
      open: false,
      message: "",
      read: false
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.isVoteComplete = this.isVoteComplete.bind(this)
  }

  handleOnChange = (key, e) => {
    e.preventDefault()
    this.setState({ [key]: e.target.value })
  }

  handleCheckbox = () => {
    this.setState({ read: !this.state.read })
  }

  handleOnRequestClose = () => {
    this.setState({ open: false })
  }

  handleOnSubmit = () => {
    if (!this.isVoteComplete()) {
      throw err
    } else {
      const param = [
        this.state.choices
      ]

      Meteor.call('votes.insert', param,(err, result) => {
        if (err) {
          this.setState({
              message: "You cannot change your answer anymore"
            }, () => {
              this.setState({ open: true, })
              throw err
            })
          throw err
        } else {
          Meteor.call('voted.insert', (err, result) => {
            if (err) {
              this.setState({
                  message: "You cannot change your answer anymore"
                }, () => {
                  this.setState({ open: true, })
                  throw err
                })
              throw err
            } else {
              this.setState({
                  message: "Thank you for reviewing the Constitution!"
                }, () => {
                  this.setState({ open: true, })
                  throw err
                })
            }
          })
        }
      })
    }
  }

  isVoteComplete = () => {
    if (this.state.choices == null) {
      return false
    } else {
      return true
    }
  }

  render() {
    return(
      <Grid style={style.page}>
        <Row style={style.formContainer}>
          <Col>
            <Row style={{marginTop:50}}>
              <Row style={style.pageHeader}>
                <Col>
                  <h3>Kindly review the changes in the AECES Constitution 2020 thoroughly:</h3> 
                </Col>
              </Row>
              <Row style={style.formContainer}>
                <Col>
                  <h4><a target="_blank" href="https://facebook.com">2020 Constitution</a></h4>
                  <h4><a target="_blank" href="https://facebook.com">2016 Constitution</a></h4>
                  <h4><a target="_blank" href="https://facebook.com">Comparison of changes</a></h4>
                </Col>
              </Row>
              <Divider style={style.divider}/>
              <Row style={style.formContainer}>
                <Col lgOffset={1}>
                  <Checkbox 
                    label={"I have read and understood the proposed changes in the 2020 Constitution"}
                    defaultChecked={this.state.read}
                    onCheck={this.handleCheckbox}
                  />
                </Col>
              </Row>
              <Row style={style.formContainer}>
                <VotingRow
                  positionCode="choices"
                  candidates={candidates.choices}
                  disabled={!this.state.read}
                  onChange={this.handleOnChange} />
              </Row>
              <Row style={style.formContainer}>
                <Col>
                  <Row style={style.buttonRow}>
                    <Col lg={12}>
                      <RaisedButton
                        label="Submit"
                        labelPosition="before"
                        primary={true}
                        disabled={!this.isVoteComplete()}
                        onClick={() => this.handleOnSubmit()} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Dialog
                title="Vote Submission Result"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleOnRequestClose} >
                { this.state.message }
              </Dialog>
            </Row>
          </Col> 
        </Row>
      </Grid>
    )
  }
}

export default VotingPage