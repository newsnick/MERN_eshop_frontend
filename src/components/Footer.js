import React from 'react'
import LinkSource from './LinkSource'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; E-Shop</Col>
        </Row>
        <Row>
          <LinkSource />
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
