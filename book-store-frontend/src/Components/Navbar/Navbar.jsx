import UseForm from '../UseForm/UseForm';
import { NavDropdown, Button, FormControl, Form, Nav, Navbar, Col, Row} from 'react-bootstrap'
import DisplayLogin from '../Auth/Login'
import SearchBar from '../SearchBar/SearchBar'

function MyNavBar() {

    return(
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>

      <Col/>

      <Col>
        {SearchBar()}
      </Col>

      <Col>
        {DisplayLogin('navBar')}
      </Col>
    
    </Navbar>
    
    )
}

export default MyNavBar;