import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';
import Inventory from '../Inventory/inventory';
import EditBook from '../EditBook/EditBook';
import HeroImage from '../HeroImage/HeroImage';
import StoreSalesStats from '../StoreSalesStats/StoreSalesStats';




function RetailerMain(props){

    function validate(){
        if(props.currentUser === null){
            props.history.push('/books')
        }
        if(props.currentUser.type === 'customer'){
            props.history.push('/books')
        }
    }

    useEffect(()=>{
        validate();
    }, [props.currentUser]);

    const [ displayAddBook, setDisplayAddBook ] =  useState(false);
    const [ displayInventory, setDisplayInventory ] = useState(false);
    const [ displayEditBook, setDisplayEditBook ] = useState(false);
    const [ displayHeroImage, setDisplayHeroImage ] = useState(false);
    const [ bookToEdit, setBookToEdit ] = useState();
    const [ editComplete, setEditComplete ] = useState(false);
    const [ displaySales, setDisplaySales ] = useState(false);
    


    function ToggleInventory(){
        setDisplayInventory(!displayInventory);
        setDisplayEditBook(false);
        setDisplayAddBook(false);
        setDisplaySales(false);
    }

    function ToggleAddBook(){
        setDisplayAddBook(!displayAddBook);
        setDisplayInventory(false);
        setDisplayEditBook(false);
        setDisplayHeroImage(false);
        setDisplaySales(false);
    }

    function ToggleHeroImage() {
        setDisplayHeroImage(!displayHeroImage);
        setDisplayAddBook(false);
        setDisplayInventory(false);
        setDisplayEditBook(false);
        setDisplaySales(false);
    }

    function ToggleEditBook(e,data){
        setDisplayEditBook(!displayEditBook)
        
        //axios.get to get book by id;

        setBookToEdit(e.target.id);//this will eventually be set in the axios.get request for the book.
    }

    function ToggleDisplaySalesStats(){
        setDisplaySales(!displaySales);
        setDisplayAddBook(false);
        setDisplayInventory(false);
        setDisplayEditBook(false);
        setDisplayHeroImage(false);
    }

    return(
        <React.Fragment>
            <Row/><Row/>
            
            <Col>
                
                <Row className="justify-content-md-center">
                    <Col/>
                    <Col>
                        <Button variant="info" onClick={ToggleAddBook} block>Add Book</Button>
                    </Col>
                    <Col>
                        <Button variant="info" onClick={ToggleInventory} block>Inventory</Button>
                    </Col>
                    <Col>
                     <Button variant="info" onClick={ToggleDisplaySalesStats} block>Sales</Button>
                    </Col>
                    <Col>
                        <Button variant="info"  onClick={ToggleHeroImage} block>Banner</Button>
                    </Col>
                    <Col/>
                </Row>
                
                


                <Row>
                    <Col/>
                    <Col>
                        {!displayAddBook ? <div/> : <AddBook />}
                        {!displayInventory ? <div/> : <Inventory 
                            ToggleEditBook={ToggleEditBook}
                            editComplete = {editComplete}
                            setEditComplete = {setEditComplete}
                        />}
                        {!displayHeroImage ? <div/> : <HeroImage />}
                        {!displaySales ? <div/> : <StoreSalesStats 
                        currentUser={props.currentUser}
                        

                        />}
                    </Col>
                    <Col> 
                        {!displayEditBook ? <div /> : <EditBook 
                        setDisplayEditBook={setDisplayEditBook}
                        bookToEdit={bookToEdit}
                        setBookToEdit={setBookToEdit}
                        editComplete = {editComplete}
                        setEditComplete = {setEditComplete}

                        />}
                    </Col>
                </Row>
            </Col>

        </React.Fragment>
    )
}

export default withRouter(RetailerMain);