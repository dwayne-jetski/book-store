import React, { useState } from 'react';
import { NavDropdown, Button, FormControl, Form, Nav, Navbar, Col, Row} from 'react-bootstrap';
import './Landing.css'

import Registration from '../Register/Register'
import Login from '../Login/Login'

function Landing () {

    const [ authType, useAuthType ] = useState('login')

    function LoadLogin(login){
        useAuthType(login);
        console.log(authType);
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
                        <Button variant="info" size="lg" block onClick={()=>LoadLogin('login')}>Login Form</Button>
                    </Col>
                    
                    <Col>
                        <Button variant="info" size="lg" block onClick={()=>LoadRegister('register')}>Register Form</Button>
                    </Col>

                </Row>
                <Row>
                    <Col/>

                        { authType === 'login' ? Login('landing') : Registration() }

                    <Col/>
                </Row>

            </Col>

            <Col xs={3} />

        </Row>
    )
}

export default Landing;