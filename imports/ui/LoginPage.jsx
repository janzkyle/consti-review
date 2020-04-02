import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { withTracker } from 'meteor/react-meteor-data'

import { Grid, Row, Col } from 'react-bootstrap'
import { Paper, RaisedButton } from 'material-ui'
import { yellow400, grey800, red500, white } from 'material-ui/styles/colors'
import Input from './Input'
import Logo from './Logo'
import Footer from './Footer'

const style = {
  page: {
    minHeight: '100vh',
    padding: 0,
    backgroundColor: yellow400,
  },
  formSection: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  form: {
    display: 'inline-block',
    borderStyle: 'dashed',
    padding: '25px 10% 50px 10%',
    backgroundColor: white,
  },
  formHeader: {
    marginBottom: 35,
    fontFamily: "'Cormorant Garamond', serif",
    textAlign: 'center'
  },
  formError: {
    padding: '10px 0 10px 0',
    backgroundColor: red500,
    color: white,
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '25px 0px 0px 0px',
  },
  formSubmit: {
    labelStyle: {
      fontFamily: "'Roboto Mono', monospace",
      letterSpacing: 5,
    },
    backgroundColor: yellow400,
  },
  logoSection: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: white,
  },
  forgotPasswordButton: {
    labelStyle: {
      fontFamily: "'Roboto Mono', monospace",
      letterSpacing: 5,
    },
  }
}

// App component - represents the whole app
class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      isErrorHidden: true,
    }

    this.handleLogin.bind(this)
    this.handleOnChange.bind(this)
  }

  handleLogin = () => {
    Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      if (err)
        this.setState({ isErrorHidden: false })
      else {
        this.setState({ isErrorHidden: true }, (err) => {
          if (err) throw err
          FlowRouter.redirect('/dashboard')
        })
      }
    })
  }

  handleOnForgotPassword = () => {
    FlowRouter.redirect('/forgot-password')
  }
  
  handleOnChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render () {
    return (
      <div>
        <input type="hidden" value="something"/>
        <Grid fluid={true} style={style.page}>
          <Col smHidden lg={6} style={style.logoSection}>
            <Logo />
          </Col>  
          <Col lg={6} style={style.formSection}>
            <Col lg={8} xs={12} style={style.form}>
              <h1 style={style.formHeader}> Log In </h1>
              <h5 style={style.formError} hidden={this.state.isErrorHidden}>
                Error: Incorrect Username or Password
              </h5>
              <Input
                value={this.state.email}
                floatingLabelText="E-mail"
                style={style.formInput.custom}
                autoFocus
                underlineStyle={style.formInput.underlineStyle}
                underlineFocusStyle={style.formInput.underlineFocusStyle}
                floatingLabelStyle={style.formInput.floatingLabelStyle}
                floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle}
                onChange={(e) => this.handleOnChange('email', e.target.value)} />
              <Input
                value={this.state.password}
                type="password"
                floatingLabelText="Password"
                style={style.formInput.custom}
                underlineStyle={style.formInput.underlineStyle}
                underlineFocusStyle={style.formInput.underlineFocusStyle}
                floatingLabelStyle={style.formInput.floatingLabelStyle}
                floatingLabelFocusStyle={style.formInput.floatingLabelFocusStyle}
                onChange={(e) => this.handleOnChange('password', e.target.value)} />
              <Row style={style.formSubmitContainer}>
                <RaisedButton
                  label="Submit"
                  labelStyle={style.formSubmit.labelStyle}
                  backgroundColor={style.formSubmit.backgroundColor}
                  onClick={() => this.handleLogin()} />
              </Row>
              <Row style={style.formSubmitContainer}>
                <RaisedButton
                  label="Forgot Password"
                  style={style.forgotPasswordButton}
                  labelStyle={style.forgotPasswordButton.labelStyle}
                  primary={true}
                  onClick={() => this.handleOnForgotPassword()} />
              </Row>
            </Col>
          </Col>
        </Grid>
        <Footer />
      </div>
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
