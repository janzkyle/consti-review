import React from 'react'

import { Row } from 'react-bootstrap'
import { TextField } from 'material-ui'

const Input = (props) => {
  return <Row style={{ margin:0 }}> <TextField {...props} fullWidth={true} /> </Row>
}

export default Input