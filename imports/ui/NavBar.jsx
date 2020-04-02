import React from 'react'

import { Row } from 'react-bootstrap'
import { AppBar } from 'material-ui'
import { yellow500, grey800 } from 'material-ui/styles/colors'

import LogoutButton from './LogoutButton'

const style = {
  appBar: {
    backgroundColor: yellow500,
  },
  titleStyle: {
    color: grey800,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
  }
}
const NavBar = (props) => {
  return (
    <AppBar
      showMenuIconButton={false}
      style={style.appBar}
      title="AECES Constitutional Review"
      titleStyle={style.titleStyle}
      iconElementRight={<LogoutButton />} />
  )
}

export default NavBar