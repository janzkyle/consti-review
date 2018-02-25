import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { Grid, Row } from 'react-bootstrap'
import { Paper, RaisedButton } from 'material-ui'
import { yellow400, grey800, white } from 'material-ui/styles/colors'
import Input from './Input'

const style = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: yellow400,
  },
  form: {
    display: 'inline-block',
    borderStyle: 'dashed',
    padding: '25px 5% 50px 5%',
    backgroundColor: white,
  },
  formHeader: {
    marginBottom: 35,
    fontFamily: "'Shadows Into Light', cursive",
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
  }
}

// App component - represents the whole app
class LoginPage extends Component { 
  render() {
    return (
      <Grid fluid={true} style={style.page}>
        <div style={style.form}>
          <h1 style={style.formHeader}> AECES Comelec System </h1>
          <Input
            floatingLabelText="E-mail"
            style={style.formInput.custom}
            underlineStyle={style.formInput.underlineStyle}
            underlineFocusStyle={style.formInput.underlineFocusStyle}
            floatingLabelStyle={style.formInput.floatingLabelStyle}
            floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle} />
          <Input
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

export default LoginPage

// export default withTracker(() => {
//   return {
//     users: Meteor.users.find({}).fetch,
//   }
// })(LoginPage)

// db.votes.insert({ voter_id:132694, position:"PRESIDENT", candidate_id: 1, createdAt: new Date() });
