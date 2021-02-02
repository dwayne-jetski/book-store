import UseForm from '../UseForm/UseForm';
import { NavDropdown, Button, FormControl, Form, Nav, Navbar, Col, Row} from 'react-bootstrap'

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
      
        <Form inline>
          <Col>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Col>
          <Col>
            <Button type="Submit" variant="outline-info">Search</Button>
          </Col>
        </Form>

      </Col>

      <Col>
        <Form inline>
          
          <Col>
            <FormControl type="email" placeholder="Search" className="mr-sm-2" />
          </Col>
          
          <Col>
            <FormControl type="password" placeholder="Password" classNave = "mr-sm-2" />
          </Col>
          
          <Col>
            <Button type="submit" variant="outline-info">Login</Button>
          </Col>
      
        </Form>
      </Col>
    
    </Navbar>
    
    )
}

export default MyNavBar;