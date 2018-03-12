import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { withTracker } from 'meteor/react-meteor-data'

import { Grid, Row, Col } from 'react-bootstrap'
import { Paper, RaisedButton } from 'material-ui'
import { yellow400, grey800, green500, red500, white } from 'material-ui/styles/colors'
import Input from './Input'
import Logo from './Logo'

var style = {
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
  formSuccess: {
    padding: '10px 0 10px 0',
    backgroundColor: green500,
    color: white,
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
}
// App component - represents the whole app
class ResetPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      isSuccessHidden: true,
      isError: null,
      message: ''
    }

    this.handleOnClick.bind(this)
    this.handleOnChange.bind(this)
  }

  handleOnClick = () => {
    Accounts.resetPassword(this.props.token, this.state.password, (err) => {
      this.setState({ isError: false, isSuccessHidden: false, message: 'Success: Password reset. Redirecting...' })
      setTimeout(() => FlowRouter.redirect('/'), 2500)
    })
  }
  
  handleOnChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render () {
    return (
      <Grid fluid={true} style={style.page}>
        <Col lg={6} style={style.logoSection}>
          <Logo />
        </Col>
        <Col lg={6} style={style.formSection}>
          <Col lg={8} xs={12} style={style.form}>
            <h1 style={style.formHeader}> Reset Password </h1>
            <h5 style={this.state.isError ? style.formError:style.formSuccess} hidden={this.state.isSuccessHidden}>
              {this.state.message}
            </h5>
            <Input
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
                label="Reset Password"
                labelStyle={style.formSubmit.labelStyle}
                primary={true}
                onClick={() => this.handleOnClick()} />
            </Row>

            <Row style={style.formSubmitContainer}>
              <RaisedButton
                label="Back"
                labelStyle={style.formSubmit.labelStyle}
                backgroundColor={style.formSubmit.backgroundColor}
                onClick={() => FlowRouter.redirect('/login')} />
            </Row>
          </Col>
        </Col>
      </Grid>
    )
  }
}

export default ResetPassword