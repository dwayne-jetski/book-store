import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Col, Row, Form, FormControl, Card } from 'react-bootstrap';
import useForm from '../UseForm/UseForm';
import './Books.css'

function Books(props){

    const [ bookData, setBookData ] = useState(null);
    const { values, handleSubmit, handleChange } = useForm();


    useEffect(() => {
        axios.get('http://localhost:5000/api/store/products/all')
        .then(res => {
            console.log("response: ", res);
            setBookData(res.data);
        });
    }, []);

    const GetBookData = () => {
        axios.get('http://localhost:5000/api/store/products/all')
        .then(res => {
            console.log("response: ", res);
            setBookData(res.data); 
        });
    }

    function handleClick(e){
        console.log("product ID: ", e.target.id);
        console.log("store ID: ", e.target.name);
    }

    function DisplayBooks() {

        console.log("MADE IT IN!", bookData)

        let filteredResults = bookData;

        return bookData.map((data, index) => {
            const { authors, binding, datePublished, dimensions, edition, image, inventory, isbn, isbn13, language, msrp, pages, price, publisher, storeId, subjects, synopsis, title, titleLong, _id } = data;
            return(
                <Col>
                    <Card bg="dark" className="card_style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image}/>
                        
                        <Card.Body >
                            <Card.Title className="image_style">{title}</Card.Title>
                            <Card.Title>Authors: 
                                {authors.map((data, index) => {
                                    return(`${data}, `)
                                }) 
                                }
                            </Card.Title>
                            <Card.Text>
                            Synopsis: {synopsis}
                            </Card.Text>
                            <Card.Text>
                                Binding {binding}<br/><br/>
                                isbn: {(isbn) ? isbn : isbn13}<br/>
                                Language: {language}<br/>
                                Page Count: {pages}<br/>
                                Subjects: {subjects.map((data, index) => { return(`${data} `) } ) }<br/>
                            </Card.Text>
                            <Card.Text>
                                Price: ${price}
                            </Card.Text>
                            {(inventory === 0 ) ? <Button>out of stock</Button> : <Button variant="outline-info" id={_id} name={storeId} onClick={(e)=> handleClick(e)}>Add to Cart</Button>}
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }




    return(
        <Row>
            <Col xs={2}>

            </Col>

            <Col xs={6}>
                <h1>Hello: {(props.currentUser === null) ? "Guest" : props.currentUser.firstName}</h1>


                <Form>
                    <Form.Control size="lg" placeholder="Search..." name="search" onChange={handleChange} value={values.search} />
                </Form>

                <Row>
                    {(bookData === null ) ? <div>loading...</div> : DisplayBooks()}
                </Row>

            </Col>
            <Col xs={2}>

            </Col>

        </Row>
    )
}

export default Books;