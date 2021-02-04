import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useForm from '../UseForm/UseForm';


  function Registration(){

    const Register = () =>{

        const newUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            password2: values.password2
        }
        console.log(newUser);

    }

    const { values, handleSubmit, handleChange } = useForm(Register);

    return(

        <Row>

            <Col xs={3}/>
            
            <Col xs={6} >
                <br/>
                <Row>
                    <h1 className="header-text">Welcome! Please login or sign up!</h1>
                </Row>

                
                    <Col/>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="text" name="firstName" placeholder="First Name..." required="true" value={values.firstName} onChange={handleChange} />
                            <Form.Control type="text" name="lastName" placeholder="Last Name..." required="true" value={values.lastName} onChange={handleChange} />
                            <Form.Control type="email" name="email" placeholder="Email..." required="true" value={values.email} onChange={handleChange} />
                            <FormControl type="password" name="password" placeholder="Password..." classNave = "mr-sm-2" value={values.password} onChange={handleChange} />
                            <Form.Control type="password" name="password2" placeholder="confirm password" required="true" value={values.password2} onChange={handleChange} />
                            <Button type="submit" variant="info">Register</Button>
                            <Link to='/login' className="btn btn-link">Login</Link>
                        </Form>
                    <Col/>
                

            </Col>

            <Col xs={3} />

        </Row>




    )
}

export default Registration;
