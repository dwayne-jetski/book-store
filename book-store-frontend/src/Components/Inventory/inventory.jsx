import React from 'react';
import { Button, Row, Col, Form, FormControl, Table } from 'react-bootstrap';

function Inventory(props) {

    

    let _id = 123456789;

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
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{_id}</td>
                    <td>Book Title</td>
                    <td>My Name</td>
                    <td>Action</td>
                    <td>1234567890123</td>
                    <td>19.95</td>
                    <td>15</td>
                    <td><Button id={_id} onClick={()=>props.ToggleEditBook(_id)}>EDIT</Button></td>
                </tr>
            </tbody>
        </Table>

    )

}

export default Inventory;