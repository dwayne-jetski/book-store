import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import useForm from '../UseForm/UseForm';
import { userActions } from '../../_actions/user.actions'

function Login(component){

    const [ inputs, setInputs ] = useState({ email: '', password: ''});

    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
 

    

    function handleChange(e){
        const { name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if(email && password){
           
            dispatch(userActions.login(email, password));
        }
    }



    if (component === 'navBar'){
        return(
            <Form inline onSubmit={handleSubmit}>
                <Col>
                    <FormControl type="email" placeholder="Email..." name="email" onChange={handleChange} value={email} className={'form-control' + (submitted && !email ? 'is-invalid' : '')} required={true} />
                </Col>
                <Col>
                    <FormControl type="password" placeholder="Password..." name="password" onChange={handleChange} value={password} className={'form-control' + (submitted && !password ? 'is-invalid' : '')} required={true}/>                
                </Col>
                <Col>
                    <Button type="submit" variant="outline-info">{loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}Login</Button>
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
                        <Col>
                            <Form inline onSubmit={handleSubmit}>
                                <FormControl type="email" placeholder="Email..." name="email" onChange={handleChange} value={email} className={'form-control' + (submitted && !email ? 'is-invalid' : '')} required={true}/>
                                <FormControl type="password" placeholder="Password..." name="password" onChange={handleChange} value={password} className={'form-control' + (submitted && !password ? 'is-invalid' : '')} required={true} />                                
                                <Button type="submit" variant="info">{loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}Login</Button>
                                <Link to="/register" className="btn btn-link">Register</Link>
                            </Form>
                        </Col>
                    </Row>

                </Col>

                <Col xs={3} />

            </Row>  
        )
    }
}

export default Login;