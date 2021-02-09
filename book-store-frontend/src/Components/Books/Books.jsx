import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Col, Row, Form, FormControl, Card } from 'react-bootstrap';

function Books(props){

    const [ data, setData ] = useState({});

    const GetData = () => {
        
        axios.get('http://localhost:5000/api/store/products/all')
        .then(res => {
            console.log(res)
            
        });
    }

    const getUser = () =>{
        console.log(props.currentUser.id)
        const id = (props.currentUser.id) ? props.currentUser.id : props.currentUser._id;
        const url = "http://localhost:5000/api/users/"+id;

        axios.get(url).then(res => props.setCurrentUser(res.data));
        console.log(props.currentUser);
        console.log(localStorage.jwtToken)

    }

    return(
        <Row>
            <Col xs={2}>

            </Col>

            <Col xs={6}>
                <h1>Hello: {(props.currentUser === null) ? "Guest" : props.currentUser.firstName}</h1>
                <Button onClick={getUser}> get user </Button>
                <Button onClick={GetData}> get books </Button>

                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/7/7e/Adventure_Time_Distant_Lands_Poster.jpg"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Text about the book goes here!
                                </Card.Text>
                                <Button variant="info">Add to Cart</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>

            </Col>
            <Col xs={2}>

            </Col>

        </Row>
    )
}

export default Books;