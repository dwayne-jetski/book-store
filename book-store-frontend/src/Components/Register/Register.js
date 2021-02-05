import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions/user.actions'
import useForm from '../UseForm/UseForm';


  function Registration(){


    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });
    const [ submitted, setSubmitted ] = useState(false);
    /* const registering = useSelector (state => state.registration.registering); */
    const dispatch = useDispatch();

    //resets login status
 /*    useEffect(() => {
        dispatch(userActions.logout())
    }, []); */

    function handleChange(e) {
        const { name, value } =  e.target
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if(user.firstName && user.lastName && user.email && user.password && user.password2){
            dispatch(userActions.register(user));
        }
    }

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
                            <Form.Control type="text" name="firstName" placeholder="First Name" required={true} value={user.firstName} onChange={handleChange} />
                            <Form.Control type="text" name="lastName" placeholder="Last Name" required={true} value={user.lastName} onChange={handleChange} />
                            <Form.Control type="email" name="email" placeholder="Email" required={true} value={user.email} onChange={handleChange} />
                            <FormControl type="password" name="password" placeholder="Password 8-32 Characters" className = "mr-sm-2" value={user.password} onChange={handleChange} />
                            <Form.Control type="password" name="password2" placeholder="Confirm password" required={true} value={user.password2} onChange={handleChange} />
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
