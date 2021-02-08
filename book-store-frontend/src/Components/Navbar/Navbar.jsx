import { Nav, Navbar, Col } from 'react-bootstrap'
import UserLogin from '../UserLogin/UserLogin'
import SearchBar from '../SearchBar/SearchBar'

function MyNavBar(props) {

    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/books">Book Store!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login" >login</Nav.Link>
          <Nav.Link href="/register">register</Nav.Link>
          <Nav.Link href="/retailermain">Retailer Main</Nav.Link>
          <Nav.Link href="/books">Books</Nav.Link>
        </Nav>
        <Col xs={1} />

        <Col xs={3}>
          {SearchBar()}
        </Col>

        <Col xs={4}>
        </Col>
      
      </Navbar>
    
    )
}

export default MyNavBar;