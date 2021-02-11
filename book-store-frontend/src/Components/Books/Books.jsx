import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Col, Row, Form, Card } from 'react-bootstrap';
import useForm from '../UseForm/UseForm';
import './Books.css'

function Books(props){

    const [ bookData, setBookData ] = useState(null);
    const { values, handleSubmit, handleChange } = useForm();
    const [ heroImage, setHeroImage ] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:5000/api/store/products/all')
        .then(res => {
            setBookData(res.data);
        });

        axios.get('http://localhost:5000/api/store/heroimage/6023583e65778950a0e595d0').then(res=>{
            setHeroImage(res.data.image);
        });

    }, []);

    

    function handleClick(e){
        console.log("product ID: ", e.target.id);
        console.log("store ID: ", e.target.name);

        const bookId = e.target.id;
        const userId = props.currentUser._id;
        const url = 'http://localhost:5000/api/store/products/'+bookId
        console.log(url)
        console.log(userId);



        async function getBookData(){
            await axios.get(url)
            .then(res => {
                console.log(res.data);
                const addBook = res.data
                axios.put('http://localhost:5000/api/users/cart/addBook/'+userId, addBook)
                .then(res=> console.log(res));
            });
        }

        getBookData();
    
        axios.put('http://localhost:5000/api/store/products/decrement/'+bookId)
        .then(res=> console.log(res));
 

        //get the book via axios.get('http://localhost:5000/api/store/products/'+bookid).then(res=> )

        //add the book into the user's cart via an axios.put searching for user by id 
            //this needs to be created on the backend

        //an axios.put request that decrements the store's inventory for a book. axios.put('http://localhost:5000/api/store/products/decrement/:id, )
            //this needs to be created on the backend
    }

    function DisplayBooks() {

        let filteredResults = bookData;

        return bookData.map((data, index) => {
            const { authors, binding, datePublished, dimensions, edition, image, inventory, isbn, isbn13, language, msrp, pages, price, publisher, storeId, subjects, synopsis, title, titleLong, _id } = data;
            return(
                <Col>
                    <Card bg="dark" className="card_style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image}/>
                        
                        <Card.Body >
                            <Card.Title className="image_style">{title}</Card.Title>
                            <Card.Title>Authors: {authors} </Card.Title>
                            <Card.Text>
                            Synopsis: {synopsis}
                            </Card.Text>
                            <Card.Text>
                                Binding {binding}<br/><br/>
                                isbn: {(isbn) ? isbn : isbn13}<br/>
                                Language: {language}<br/>
                                Page Count: {pages}<br/>
                                Subjects: {subjects}<br/>
                            </Card.Text>
                            <Card.Text>
                                Price: ${price}
                            </Card.Text>
                            {(inventory === 0 ) ? <Button>out of stock</Button> : <Button variant="outline-info" id={_id} name={storeId} onClick={(e )=> handleClick(e)}>Add to Cart</Button>}
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

            <Col xs={8}>

                <Row>
                    {heroImage ? <img src={heroImage} className="image_style"/> : <div>loading...</div>} 
                </Row>

                <h1>Hello: {(props.currentUser === null) ? "Guest" : props.currentUser.firstName + ' ' + props.currentUser.lastName}</h1>


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