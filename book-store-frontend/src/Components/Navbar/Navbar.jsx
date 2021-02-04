import { Nav, Navbar, Col } from 'react-bootstrap'
import DisplayLogin from '../Login/Login'
import SearchBar from '../SearchBar/SearchBar'

function MyNavBar() {

    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Book Store!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#books">Books</Nav.Link>
          <Nav.Link href="#myCart">My Cart</Nav.Link>
          <Nav.Link href="#myAccount">My Account</Nav.Link>
        </Nav>
        <Col xs={1} />

        <Col xs={3}>
          {SearchBar()}
        </Col>

        <Col xs={4}>
          {DisplayLogin('navBar')}
        </Col>
      
      </Navbar>
    
    )
}

export default MyNavBar;