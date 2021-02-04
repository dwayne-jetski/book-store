import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useForm from '../UseForm/UseForm';

function Login(component){

    const login = () =>{

        const loginCridentials ={
            email: values.email,
            password: values.password,
        }

        console.log(loginCridentials);

    }

    const [submitted, setSubmitted] = useState(false);
    




    const { values, handleChange, handleSubmit } = useForm(login);

    if (component === 'navBar'){
        return(
            <Form inline onSubmit={handleSubmit}>
                <Col>
                    <FormControl type="email" placeholder="Email..." name="email" onChange={handleChange} value={values.email} className="mr-sm-2" required="true" />
                </Col>
                <Col>
                    <FormControl type="password" placeholder="Password..." name="password" onChange={handleChange} value={values.password} className = "mr-sm-2" required="true"/>                
                </Col>
                <Col>
                    <Button type="submit" variant="outline-info">Login</Button>
                </Col>
            </Form>
        )
    } else {
        return(
            <Row>

                <Col xs={3}/>
                
                <Col xs={6} >
                    <br/>
                    <Row>
                        <h1 className="header-text">Welcome! Please login or sign up!</h1>
                    </Row>

                    
                    <Row>
                        <Col />
                        <Col>
                            <Form inline onSubmit={handleSubmit}>
                                <FormControl type="email" placeholder="Email..." name="email" onChange={handleChange} value={values.email} className="mr-sm-2" required="true"/>
                                <FormControl type="password" placeholder="Password..." name="password" onChange={handleChange} value={values.password} classNave = "mr-sm-2" required="true" />                                
                                <Button type="submit" variant="info">Login</Button>
                                <Link to="/register" className="btn btn-link">Register</Link>
                            </Form>
                        </Col>
                        <Col/>
                    </Row>

                </Col>

                <Col xs={3} />

            </Row>  
        )
    }
}

export default Login;