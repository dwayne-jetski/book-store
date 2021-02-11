import React from 'react';
import { Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken';
import useForm from '../UseForm/UseForm';

import axios from 'axios';

function Login(props){
    const { values, handleChange } = useForm()

   const UserLogin = (e) => {

        e.preventDefault();
      
        const url = 'http://localhost:5000/api/users/'

        const loginCredentials = {
            email: values.email,
            password: values.password
        }

        axios.post(url+'login', loginCredentials)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);

            setAuthToken(token);

            const currnetUserToken = jwt_decode(token);

            axios.get(url+currnetUserToken.id, )
            .then(res=> {
                console.log(res.data); 
                props.setCurrentUser(res.data);
                localStorage.setItem('user', res.data);
            });
            

            props.history.push('/books');

        })
        .catch(err => {
            console.log(err);
        });

        
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
                        <Form inline onSubmit={UserLogin}>
                            <FormControl type="email" placeholder="Email..." name="email" onChange={handleChange} value={values.email} required={true}/>
                            <FormControl type="password" placeholder="Password..." name="password" onChange={handleChange} value={values.password} required={true} />                                
                            <Button type="submit" variant="info">Login</Button>
                            <Link to="/register" className="btn btn-link">Customer Registration</Link>
                        </Form>
                    </Col>
                </Row>

            </Col>

            <Col xs={3} />

        </Row>  
    )
}

export default withRouter(Login);