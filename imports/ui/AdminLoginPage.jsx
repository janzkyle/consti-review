import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { Grid, Row, Col } from 'react-bootstrap'
import { Paper, RaisedButton } from 'material-ui'
import { yellow400, grey800, white } from 'material-ui/styles/colors'
import Input from './Input'

const style = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: yellow400,
  },
  form: {
    display: 'inline-block',
    borderStyle: 'dashed',
    margin: 10,
    padding: '25px 10% 50px 10%',
    backgroundColor: white,
  },
  formHeader: {
    marginBottom: 35,
    fontFamily: "'Cormorant Garamond', serif",
    textAlign: 'center'
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
      marginTop: 10,
      fontFamily: "'Roboto Mono', monospace",
    }
  },
  formSubmitContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px 0px 0px 0px',
  },
  formSubmit: {
    labelStyle: {
      fontFamily: "'Roboto Mono', monospace",
      letterSpacing: 5,
    },
    backgroundColor: yellow400,
  },
}

// App component - represents the whole app
class AdminLoginPage extends Component { 
  render() {
    return (
      <Grid fluid={true} style={style.page}>
        <div style={style.form}>
          <h1 style={style.formHeader}> Admin - AECES Comelec </h1>
          <Input
            floatingLabelText="E-mail"
            style={style.formInput.custom}
            underlineStyle={style.formInput.underlineStyle}
            underlineFocusStyle={style.formInput.underlineFocusStyle}
            floatingLabelStyle={style.formInput.floatingLabelStyle}
            floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle} />
          <Input
            type="password"
            floatingLabelText="Password"
            style={style.formInput.custom}
            underlineStyle={style.formInput.underlineStyle}
            underlineFocusStyle={style.formInput.underlineFocusStyle}
            floatingLabelStyle={style.formInput.floatingLabelStyle}
            floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle} />
          <Row style={style.formSubmitContainer}>
            <RaisedButton
              label="Submit"
              labelStyle={style.formSubmit.labelStyle}
              backgroundColor={style.formSubmit.backgroundColor} />
          </Row>
        </div>
      </Grid>
    )
  }
}

export default AdminLoginPage

// export default withTracker(() => {
//   return {
//     users: Meteor.users.find({}).fetch,
//   }
// })(AdminLoginPage)

// db.votes.insert({ voter_id:132694, position:"PRESIDENT", candidate_id: 1, createdAt: new Date() });
