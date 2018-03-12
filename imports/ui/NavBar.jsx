import React from 'react'

import { Row } from 'react-bootstrap'
import { AppBar } from 'material-ui'
import { yellow500, grey800 } from 'material-ui/styles/colors'

import LogoutButton from './LogoutButton'

const style = {
  titleStyle: {
    color: grey800,
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
  }
}
const NavBar = (props) => {
  return (
    <Row style={{margin:0}}>
      <AppBar
        showMenuIconButton={false}
        style={{backgroundColor: yellow500}}
        title="AECES Voting System"
        titleStyle={style.titleStyle}
        iconElementRight={<LogoutButton />} />
    </Row>
  )
}

export default NavBar