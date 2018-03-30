import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton } from 'material-ui'
import { grey500, grey700, grey800 } from 'material-ui/styles/colors'

import VotingRow from './VotingRow'

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
    }
  ],
  evp: [
    {
      id: 2,
      name: 'Nica Medrano',
    },
  ],
  secgen: [
    {
      id: 4,
      name: 'Jonathan Ventura',
    },
  ],
  finofficer: [
    {
      id: 5,
      name: 'Lester Violeta',
    },
  ],
  vp_ea: [
    {
      id: 5,
      name: 'Shaina Loria',
    },
  ],
}
class VotingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: []
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    // this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = (key, e) => {
    e.preventDefault()
    this.setState({ [key]: e.target.value })
  }

  render() {
    return(
      <Grid style={style.page}>
        <Row style={style.formContainer}>
          <Col>
            <Row style={style.pageHeader}> <h1> VOTING PAGE </h1> </Row>
            <Divider style={style.divider}/>
            <Row style={{marginTop:25}}>
              <Col lg={6} lgOffset={0} xs={10} xsOffset={1}>
                <VotingRow
                  positionCode="president"
                  positionName="President"
                  candidates={candidates.president} />
                <VotingRow
                  positionCode="evp"
                  positionName="Executive Vice President"
                  candidates={candidates.evp} />
                <VotingRow
                  positionCode="secgen"
                  positionName="Secretary General"
                  candidates={candidates.secgen} />
              </Col>
              <Col lg={6} lgOffset={0} xs={10} xsOffset={1}>
                <VotingRow
                  positionCode="finofficer"
                  positionName="Finance Officer"
                  candidates={candidates.finofficer} />
                <VotingRow
                  positionCode="vp_ea"
                  positionName="Vice President for External Affairs"
                  candidates={candidates.vp_ea} />
                <Row style={style.buttonRow}>
                  <Col lg={12}>
                    <RaisedButton
                      label="Submit"
                      labelPosition="before"
                      primary={true} />
                  </Col>
                </Row>
              </Col>
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