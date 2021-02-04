import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';
import useForm from '../UseForm/UseForm';

function DisplayLogin(component){

    const login = () =>{

        const loginCridentials ={
            email: values.email,
            password: values.password,
        }

        console.log(loginCridentials);

    }

    const { values, handleChange, handleSubmit } = useForm(login);


    if(component === 'landing'){
        return(
            <Form inline onSubmit={handleSubmit}>
                <FormControl type="email" placeholder="Email..." name="email" onChange={handleChange} value={values.email} className="mr-sm-2" required="true"/>
                <FormControl type="password" placeholder="Password..." name="password" onChange={handleChange} value={values.password} classNave = "mr-sm-2" required="true" />                                
                <Button type="submit" variant="info">Login</Button>
            </Form>
        )
    } else if (component === 'navBar'){
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
        )}
}

export default DisplayLogin;