import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

const Nav = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <h1>To Do App</h1>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Nav