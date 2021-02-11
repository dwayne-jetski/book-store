import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';


function Inventory(props) {

    const [ bookData, setBookData ] = useState(null);
    const [ filteredResults, setFilteredResults ] = useState(null);
    const [ loading, setLoading ] = useState(true)
    

    useEffect(() => { 
    
        axios.get('http://localhost:5000/api/store/products/all')
            .then(res => {
                console.log("response: ", res);
                setBookData(res.data);
                setLoading(false);
        });

    }, [props.editComplete])


    const buildTable = () => {
        
        

        return ( loading ? <div>loading...</div> : 

            bookData.map((data, index) => {
                const { _id, title, authors, subjects, isbn, price, inventory, isbn13 } = data;

                return(
                    <tr>
                        <td>{_id}</td>
                        <td>{title}</td>
                        <td>{authors}</td>
                        <td>{subjects}</td>
                        <td>{(isbn) ? isbn : isbn13}</td>
                        <td>{price}</td>
                        <td>{inventory}</td>
                        <td><Button id={_id} onClick={(e)=>props.ToggleEditBook(e, bookData)}>EDIT</Button></td>
                    </tr>
                )
            })

        )

    }

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
                {buildTable()}
            </tbody>
        </Table>

    )

}

export default Inventory;