import React from 'react';
import { Nav, Navbar, Col, Button, NavItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function MyNavBar(props) {

  const Logout = () =>{
    
    props.setCurrentUser(null);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');

    props.history.push('/books');

  }

  const loginAndRegisterLinks = () =>{

    return(
      <React.Fragment>
        <LinkContainer to="/register">
          <NavItem eventKey={3}>Register</NavItem>
        </LinkContainer>
      </React.Fragment>
    )
  }

  const toLogin = () => {
    props.history.push('/login')
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
            <LinkContainer to="/retailer/login">
              <NavItem eventKey={5}>Retailer login</NavItem>
            </LinkContainer>
            <Col/>
            <LinkContainer to="/mycart">
              <NavItem eventKey={6}>My Cart</NavItem>
            </LinkContainer>
            <Col/>
            {(props.currentUser === null) ? loginAndRegisterLinks() : null }
          </Nav>
        </Col>

        <Col xs={5}>
          
        </Col>

        <Col xs={3}>
          {(props.currentUser === null) ? <Button variant="outline-info" onClick={()=>toLogin()}>Login</Button> : <Button variant="outline-info" onClick={()=>Logout()} >Logout</Button>}
        </Col>
      
      </Navbar>
    
    )
}

export default withRouter(MyNavBar);