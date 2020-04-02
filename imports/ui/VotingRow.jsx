import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Grid, Row, Col } from 'react-bootstrap'
import { Divider, RaisedButton, TextField } from 'material-ui'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { grey500, grey700, grey800 } from 'material-ui/styles/colors'

const style = {
  checkboxStyle: {
    display: 'flex',
    alignItems: 'center',
  },
}
class VotingRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Grid fluid={true}>
        <Row>
          <RadioButtonGroup
            name={this.props.positionCode}
            onChange={(e) => this.props.onChange(this.props.positionCode, e) } >
            {
              this.props.candidates.map((candidate, key) => {
                return (
                  <RadioButton
                    label={candidate.name}
                    value={candidate.id}
                    disabled = {this.props.disabled}
                    key={key}/>
                )
              })
            }
          </RadioButtonGroup>
        </Row>
      </Grid>
    )
  }
}

export default VotingRow