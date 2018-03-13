import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'

import { RaisedButton } from 'material-ui'
import FontIcon from 'material-ui/svg-icons/content/remove-circle-outline'


class LogoutButton extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick = () => {
    Meteor.logout((err) => {
      if (err) throw err
      FlowRouter.redirect('/login')
    })
  }

  render () {
    return (
      <div alt="Log Out">
        <RaisedButton
          labelPosition="before"
          secondary={true}
          icon={<FontIcon />}
          style={{marginTop:5}}
          onClick={() => this.onClick()} />
      </div>
    )
  }
}

export default LogoutButton