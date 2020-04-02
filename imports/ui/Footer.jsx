import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { List, ListItem } from 'material-ui/List'

import FacebookIcon from 'material-ui-community-icons/icons/facebook-box'
import TwitterIcon from 'material-ui-community-icons/icons/twitter-box'
import WebsiteIcon from 'material-ui/svg-icons/action/code'

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-container">
        <Col lg={5} lgOffset={1} sm={10} smOffset={1}>
          <Row>
            <h2 className="footer-accounts-header"> Help us improve the app! </h2>
          </Row>
          <Row>
            <Col lg={12}>
              <p>
                Don't hesitate to message AECES with regards to bugs,
                problems, comments, and suggestions for the app.
              </p>
              <p>
                This application is managed by AECES.
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={5} lgOffset={1} sm={10} smOffset={1}>
          <Row>
            <h2 className="footer-accounts-header"> Contact Us </h2>
          </Row>
          <Row>
            <Col lg={12}>
              <List style={{ padding: "0px" }}>
                <ListItem
                  className="footer-media-list-item"
                  primaryText="AECES Facebook"
                  style={{ color: "white " }}
                  leftIcon={<FacebookIcon />}
                  href="https://www.facebook.com/ateneoaeces/" />
                <ListItem
                  className="footer-media-list-item"
                  primaryText="Twitter"
                  style={{ color: "white " }}
                  leftIcon={<TwitterIcon />}
                  href="https://twitter.com/ateneoAECES" />
                <ListItem
                  className="footer-media-list-item"
                  primaryText="Website"
                  style={{ color: "white " }}
                  leftIcon={<WebsiteIcon />}
                  href="/" />
              </List>
            </Col>
          </Row>
        </Col>
      </div>
      <div id="footer-end">
        <Row id="footer-end-content">
          <Col lg={10} lgOffset={1}>
            Made and Designed by&nbsp;
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/levy-medina-ii">
              Levy V. Medina II
            </a>
          </Col>
          <Col lg={10} lgOffset={1}>
            Maintained by&nbsp;
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/janzrelkyleordona">
              Janzrel Kyle Ordona
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer