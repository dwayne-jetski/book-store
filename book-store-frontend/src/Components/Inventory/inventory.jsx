import React from 'react';
import { Button, Row, Col, Form, FormControl, Table } from 'react-bootstrap';

function Inventory() {

    return(
        
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>isbn</th>
                    <th>price</th>
                    <th>Total in Stock</th>
                    <th></th>
                </tr>
            </thead>
        </Table>

    )

}

export default Inventory;