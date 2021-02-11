import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Form, Col, FormControl, Button, DropdownButton, Dropdown, FormCheck } from 'react-bootstrap';
import StripeKey from '../StripeKey';

function MyCart(props){

    const [ userCart, setUserCart ] = useState(null);
    const [ cartTotal, setCartTotal ] = useState(0.00);
    const [ orderComplete, setOrderComplete ] = useState(false);


    useEffect(() => {
        if( props.currentUser !== null ){
            
            const id = props.currentUser.id;

            axios.get('http://localhost:5000/api/users/:id', id)
            .then(res=>{
                setUserCart(res.data.cart);
            });
        }

        setOrderComplete(false);

    }, []);

    const CreditCardInfo = () =>{
        return(

                    
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="First Name"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Last Name"/>
                    </Form.Group>
                </Form.Row>
            

                <Form.Row>
                    <Form.Group as={Col} controlId="fromGridCreditCard">    
                        <Form.Label>Credit Card Number: </Form.Label>
                        <Form.Control type="text" name="creditCard" placeholer="Credit Card Number" />
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="fromGridCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" name="cvv" placeholer="CVV" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="fromGridMonth">
                        <Form.Label>Month</Form.Label>
                        <Form.Control as="select" >
                            <option name="month" value="01">January</option>
                            <option name="month" value="02">February</option>
                            <option name="month" value="03">March</option>
                            <option name="month" value="04">April</option>
                            <option name="month" value="05">May</option>
                            <option name="month" value="06">June</option>
                            <option name="month" value="07">July</option>
                            <option name="month" value="08">August</option>
                            <option name="month" value="09">September</option>
                            <option name="month" value="10">October</option>
                            <option name="month" value="11">November</option>
                            <option name="month" value="12">December</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="fromGridYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control as="Select">
                            <option name="year" value="21"> 2021</option>
                            <option name="year" value="22"> 2022</option>
                            <option name="year" value="23"> 2023</option>
                            <option name="year" value="24"> 2024</option>
                            <option name="year" value="25"> 2025</option>
                            <option name="year" value="26"> 2026</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="info" type="submit">Submit Credit Info</Button>
            </Form>
                    
                
        )
    }

    const AddressInfo = () =>{
        return(

            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }


    return(
        <React.Fragment>
            <Row/>
            <Row>
                <Col xs={4}/>
                    {(props.currentUser === null) ? <h1>Guest's Cart:</h1> :<h1>{ props.currentUser.firstname } { props.currentUser.lastName } 's Cart:</h1>}
            </Row>
            <Row>
                <Col xs={1}/>
                <Col xs={4}>
                    <h1>Credit Card Info: </h1>
                    {CreditCardInfo()}
                    <br/> <br/>
                    <h1>Shipping Address: </h1>
                    {AddressInfo()}
                </Col>
                <Col xs={4}>

                </Col>
                <Col xs={1}/>
            </Row>
        </React.Fragment>
    )
}

export default MyCart;