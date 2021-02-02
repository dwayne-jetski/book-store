import React, { useState } from 'react';
import { NavDropdown, Button, FormControl, Form, Nav, Navbar, Col, Row} from 'react-bootstrap';
import './Landing.css'
import UseForm from '../UseForm/UseForm';

function Landing () {

    const [ authType, useAuthType ] = useState('login')

    function LoadLogin(login){
        useAuthType(login);
        console.log(authType);
    }

    function Login(){
        return(
            <Form>
                <Form.Control type="email" placeholder="Email..." ></Form.Control>
                <FormControl type="password" placeholder="Password..." classNave = "mr-sm-2" />
                <Button type="submit" variant="info">Login</Button>
            </Form>
        )
    }

    function Register(){
        return(
            <Form>
                <Form.Control type="text" name="firstName" placeholder="First Name..." required="true" />
                <Form.Control type="text" name="lastName" placeholder="Last Name..." required="true" />
                <Form.Control type="email" name="email" placeholder="Email..." required="true" />
                <FormControl type="password" name="password" placeholder="Password..." classNave = "mr-sm-2" />
                <Form.Control type="text" name="password2" placeholder="confirm password" required="true" />
                <Button type="submit" variant="info">Login</Button>
            </Form>
        )
    }


    function LoadRegister(register){
        useAuthType(register);
        console.log(authType);
    }

    return(
        <Row>

            <Col xs={3}/>
            
            <Col xs={6} >
                <br/>
                <Row>
                    <h1 className="header-text">Welcome! Please login or sign up!</h1>
                </Row>

                <Row>

                    <Col>
                        <Button variant="info" size="lg" block onClick={()=>LoadLogin('login')}>Login</Button>
                    </Col>
                    
                    <Col>
                        <Button variant="info" size="lg" block onClick={()=>LoadRegister('register')}>Register</Button>
                    </Col>

                </Row>
                <Row>
                    <Col/>

                    <Col>
                        {authType === 'login' ? Login() : Register() }
                    </Col>
                    
                    <Col/>
                </Row>

            </Col>

            <Col xs={3} />

        </Row>
    )
}

export default Landing;