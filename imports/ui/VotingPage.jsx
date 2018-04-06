import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton, Dialog } from 'material-ui'
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
    marginBottom: 10,
  }
}
const candidates = {
  president: [
    {
      id: 1,
      name: 'Al Bontogon',
    },
    {
      id: 2,
      name: 'Abstain',
    },
  ],
  evp: [
    {
      id: 3,
      name: 'Nica Medrano',
    },
    {
      id: 4,
      name: 'Abstain',
    },
  ],
  secgen: [
    {
      id: 5,
      name: 'Jonathan Ventura',
    },
    {
      id: 6,
      name: 'Abstain',
    },
  ],
  finofficer: [
    {
      id: 7,
      name: 'Lester Violeta',
    },
    {
      id: 8,
      name: 'Abstain',
    },
  ],
  vp_ea: [
    {
      id: 9,
      name: 'Shaina Loria',
    },
    {
      id: 10,
      name: 'Abstain',
    },
  ],
}
class VotingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      president: null,
      evp: null,
      secgen: null,
      finofficer: null,
      vp_ea: null,
      open: false,
      message: "",
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.isVoteComplete = this.isVoteComplete.bind(this)
  }

  handleOnChange = (key, e) => {
    e.preventDefault()
    this.setState({ [key]: e.target.value })
  }

  handleOnRequestClose = () => {
    this.setState({ open: false })
  }

  handleOnSubmit = () => {
    if (!this.isVoteComplete()) {
      throw err
    } else {
      const param = [
        this.state.president,
        this.state.evp,
        this.state.secgen,
        this.state.finofficer,
        this.state.vp_ea
      ]

      Meteor.call('votes.insert', param,(err, result) => {
        if (err) {
          this.setState({
              message: "Error submitting votes"
            }, () => {
              this.setState({ open: true, })
              throw err
            })
          throw err
        } else {
          Meteor.call('voted.insert', (err, result) => {
            if (err) {
              this.setState({
                  message: "Cannot vote more than once"
                }, () => {
                  this.setState({ open: true, })
                  throw err
                })
              throw err
            } else {
              this.setState({
                  message: "Success! Vote recorded."
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
    if (this.state.president == null ||
      this.state.evp == null ||
      this.state.secgen == null ||
      this.state.finofficer == null ||
      this.state.vp_ea == null
    ) {
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
            <Row style={{marginTop:25}}>
              <Row>
                <Col lg={10} lgOffset={1} xs={10} xsOffset={1}>
                  <Row style={style.pageHeader}> <h1> VOTING PAGE </h1> </Row>
                  <Divider style={style.divider}/>
                </Col>
              </Row>
              <Col lg={6} lgOffset={0} xs={10} xsOffset={1}>
                <VotingRow
                  positionCode="president"
                  positionName="President"
                  candidates={candidates.president}
                  onChange={this.handleOnChange} />
                <VotingRow
                  positionCode="evp"
                  positionName="Executive Vice President"
                  candidates={candidates.evp}
                  onChange={this.handleOnChange} />
                <VotingRow
                  positionCode="secgen"
                  positionName="Secretary General"
                  candidates={candidates.secgen}
                  onChange={this.handleOnChange} />
              </Col>
              <Col lg={6} lgOffset={0} xs={10} xsOffset={1}>
                <VotingRow
                  positionCode="finofficer"
                  positionName="Finance Officer"
                  candidates={candidates.finofficer}
                  onChange={this.handleOnChange} />
                <VotingRow
                  positionCode="vp_ea"
                  positionName="Vice President for External Affairs"
                  candidates={candidates.vp_ea}
                  onChange={this.handleOnChange} />
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

// Al Bontogon - President
// Nica Medrano - Executive Vice President
// Lester VIoleta - FInance Officer
// Jonathan Ventura - Secretary General
// Shaina Loria - Vice PResident for External Affairs