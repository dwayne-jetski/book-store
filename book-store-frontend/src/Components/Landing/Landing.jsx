import React, { useState } from 'react';
import { NavDropdown, Button, FormControl, Form, Nav, Navbar, Col, Row} from 'react-bootstrap';
import './Landing.css'
import UseForm from '../UseForm/UseForm';
import DisplayRegistration from '../Auth/Register'
import DisplayLogin from '../Auth/Login'

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
                        <Button variant="info" size="lg" block onClick={()=>LoadLogin('login')}>Login</Button>
                    </Col>
                    
                    <Col>
                        <Button variant="info" size="lg" block onClick={()=>LoadRegister('register')}>Register</Button>
                    </Col>

                </Row>
                <Row>
                    <Col/>

                        { authType === 'login' ? DisplayLogin() : DisplayRegistration() }

                    <Col/>
                </Row>

            </Col>

            <Col xs={3} />

        </Row>
    )
}

export default Landing;