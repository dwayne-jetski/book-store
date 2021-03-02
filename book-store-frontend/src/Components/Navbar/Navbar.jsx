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



  const displayRetailerMain = () => {
    return(
      <React.Fragment>
      <LinkContainer to="/retailer/main">
        <NavItem eventKey={7}>Retailer Main</NavItem>
      </LinkContainer>
    </React.Fragment>
    )
  }

  const registerLinks = () =>{

    return(
      <React.Fragment>
        <LinkContainer to="/register">
          <NavItem eventKey={3}>Register</NavItem>
        </LinkContainer>
      </React.Fragment>
    )
  }

  const myCart = () => {
    
    return(
      <React.Fragment>
        <LinkContainer to="/mycart">
          <NavItem eventKey={6}>My Cart</NavItem>
        </LinkContainer>
      </React.Fragment>
    )
  }

  const toLogin = () => {
    props.history.push('/login')
  }

    return(

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Book Store!</Navbar.Brand>
        <Col xs={5}>
          <Nav className="mr-auto">
            <Col>
              <LinkContainer to="/books">
                <NavItem eventKey={1}>Books</NavItem>
              </LinkContainer>
            </Col>
            {/* <Col/>
            <LinkContainer to="/retailer/login">
              <NavItem eventKey={5}>Retailer login</NavItem>
            </LinkContainer>
            <Col/> */}

            <Col>
             {(props.currentUser !== null && props.currentUser.type === 'customer') ? myCart() : null}
              {(props.currentUser !== null && props.currentUser.type === 'retailer') ? displayRetailerMain() : null }
              {(props.currentUser === null) ? registerLinks() : null }
            </Col>
            <Col/>
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