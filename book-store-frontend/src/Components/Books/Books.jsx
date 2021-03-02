import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Col, Row, Form, Card } from 'react-bootstrap';
import useForm from '../UseForm/UseForm';
import './Books.css'

function Books(props){

    const [ bookData, setBookData ] = useState(null);
    const { values, handleSubmit, handleChange } = useForm();
    const [ heroImage, setHeroImage ] = useState(false);
    const [ itemAddedToCart, setItemAddedToCart ] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:5000/api/store/products/all')
        .then(res => {
            setBookData(res.data);
        });

        axios.get('http://localhost:5000/api/store/heroimage/6023583e65778950a0e595d0').then(res=>{
            setHeroImage(res.data.image);
        });

    }, [itemAddedToCart]);

    

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
 
        setItemAddedToCart(!itemAddedToCart);
    }

    function filterData(value) {
        

        return bookData.filter((data) => {
            const { authors, isbn, isbn13, title, price, subjects, _id } = data;

            if( authors.toLowerCase().includes(value) || isbn.toLowerCase().includes(value) || isbn13.toLowerCase().includes(value) || 
                title.toLowerCase().includes(value) || price.toString().includes(value) || subjects.toLowerCase().includes(value) || _id.toString().includes(value)
            ){
                return data;
            } 

        });

    }

    function DisplayBooks() {


        let filteredData;

        if(values.search !== undefined){
            filteredData = filterData(values.search.toLowerCase());
            console.log(filteredData);
        } else {
            filteredData = bookData;
        }
        
        function addToCart(_id, inventory, storeId){

            return(
                <React.Fragment>
                    {(inventory < 1 ) ? <Button variant="danger">out of stock</Button> : <Button variant="outline-info" id={_id} name={storeId} onClick={(e )=> handleClick(e)}>Add to Cart</Button>}
                </React.Fragment>
            )
        }


        return filteredData.map((data, index) => {
            const { authors, binding, image, inventory, isbn, isbn13, language, pages, price, storeId, subjects, synopsis, title, _id } = data;
            return(
                <Col>
                    <Card bg="dark" className="card_style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} alt="image" />
                        
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
                            {(props.currentUser === null) ? <Button variant="warning">Register/login to Buy</Button> : addToCart(_id, inventory, storeId) }
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
                    {heroImage ? <img src={heroImage} className="image_style" alt="" /> : <div>loading...</div>} 
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