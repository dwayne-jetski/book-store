import React from 'react';
import { Nav, Navbar, Col, Button, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from '../SearchBar/SearchBar'

function MyNavBar(props) {

  const Logout = () =>{
    
    props.setCurrentUser(null);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');

  }

  const loginAndRegisterLinks = () =>{

    return(
      <React.Fragment>
        <LinkContainer to="/login">
          <NavItem eventKey={2}>login</NavItem>
        </LinkContainer>
        <Col/>
        <LinkContainer to="/register">
          <NavItem eventKey={3}>Register</NavItem>
        </LinkContainer>
      </React.Fragment>
    )
  }

    return(

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/books">Book Store!</Navbar.Brand>
        <Col xs={5}>
          <Nav className="mr-auto">
            <LinkContainer to="/books">
              <NavItem eventKey={1}>Books</NavItem>
            </LinkContainer>
            <Col/>
            {(props.currentUser === null) ? loginAndRegisterLinks() : null }
            <Col/>
            <LinkContainer to="/retailer/main">
              <NavItem eventKey={4}>Retailer Main</NavItem>
            </LinkContainer>
            <Col/>
            <LinkContainer to="/retailer/login">
              <NavItem eventKey={5}>Retailer login</NavItem>
            </LinkContainer>
            <Col/>
            <LinkContainer to="/mycart">
              <NavItem eventKey={6}>My Cart</NavItem>
            </LinkContainer>
          </Nav>
        </Col>

        <Col xs={5}>
          {SearchBar()}
        </Col>

        <Col xs={3}>
          {(props.currentUser === null) ? <Nav.Link href="/login">Login</Nav.Link> : <Button variant="outline-info" onClick={Logout} >Logout</Button>}
        </Col>
      
      </Navbar>
    
    )
}

export default MyNavBar;