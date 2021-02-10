import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';
import Inventory from '../Inventory/inventory';
import EditBook from '../EditBook/EditBook'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';


function RetailerMain(){

    const [ displayAddBook, setDisplayAddBook ] =  useState(false);
    const [ displayInventory, setDisplayInventory ] = useState(false);
    const [ displayEditBook, setDisplayEditBook ] = useState(false);
    const [ bookToEdit, setBookToEdit ] = useState();
    


    function ToggleInventory(){
        setDisplayInventory(!displayInventory);
        setDisplayEditBook(false);
        setDisplayAddBook(false);
    }

    function ToggleAddBook(){
        setDisplayAddBook(!displayAddBook);
        setDisplayInventory(false);
        setDisplayEditBook(false);
        console.log(displayAddBook)
    }

    function ToggleEditBook(e,data){
        setDisplayEditBook(!displayEditBook)
        
        //axios.get to get book by id;

        setBookToEdit(e.target.id);//this will eventually be set in the axios.get request for the book.
    }

    return(
        <React.Fragment>
            <Row/><Row/>
            
            <Col>
                
                <Row className="justify-content-md-center">
                    <Col/>
                    <Col>
                    <Button onClick={ToggleAddBook} >Add Book</Button>
                    <Link to="retailer/addbook"></Link>
                    </Col>
                    <Col>
                    <Button onClick={ToggleInventory} >View Inventory</Button>
                    </Col>
                    <Col>
                    <h1>See Your Sales Figures</h1>
                    {/* See Sales Function */}
                    </Col>
                    <Col>
                    <h1>See Book Requests</h1>
                    {/* Function for Book Requests */}
                    </Col>
                    <Col/>
                </Row>
                
                


                <Row>
                    <Col/>
                    <Col>
                        {!displayAddBook ? <div/> : <AddBook />}
                        {!displayInventory ? <div/> : <Inventory 
                            ToggleEditBook={ToggleEditBook}
                        />}
                    </Col>
                    <Col> 
                        {!displayEditBook ? <div /> : <EditBook 
                        setDisplayEditBook={setDisplayEditBook}
                        bookToEdit={bookToEdit}
                        setBookToEdit={setBookToEdit}

                        />}
                    </Col>
                </Row>
            </Col>

        </React.Fragment>
    )
}

export default RetailerMain;