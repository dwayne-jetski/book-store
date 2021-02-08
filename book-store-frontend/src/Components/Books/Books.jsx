import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Col, Row, Form, FormControl } from 'react-bootstrap';

function Books(props){

    const [ data, setData ] = useState({});

    const GetData = () => {
        
        axios.get('http://localhost:5000/api/store/products/all')
        .then(res => {
            console.log(res)
            console.log()
        });
    }

    const getUser = () =>{
        console.log(props.currentUser.id)
        const url = "http://localhost:5000/api/users/"+props.currentUser.id;

        axios.get(url).then(res => props.setCurrentUser(res.data));
        console.log(props.currentUser);

    }

    return(
        <React.Fragment>
            <Col xs={3}>

            </Col>

            <Col xs={6}>
                <h1>Hello: </h1>
                <Button onClick={getUser}> get user </Button>
            </Col>
            <Col xs={3}>

            </Col>

        </React.Fragment>
    )
}

export default Books;