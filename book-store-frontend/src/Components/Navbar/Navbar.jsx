import { Nav, Navbar, Col, Button } from 'react-bootstrap'
import UserLogin from '../UserLogin/UserLogin'
import Link from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'

function MyNavBar(props) {

  const Logout = () =>{
    
    props.setCurrentUser(null);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');

  }

    return(

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/books">Book Store!</Navbar.Brand>
        <Col xs={4}>
          <Nav className="mr-auto">
            <Nav.Link href="/login" >login</Nav.Link>
            <Nav.Link href="/register">register</Nav.Link>
            <Nav.Link href="/retailermain">Retailer</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
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