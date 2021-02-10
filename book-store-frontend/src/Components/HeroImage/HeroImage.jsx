import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormControl, Button, } from 'react-bootstrap';
import './HeroImage.css'
import useForm from '../UseForm/UseForm';

export default function HeroImage() {

    const [ heroImage, setHeroImage ] = useState(false);
    const [ updateDone, setUpdateDone ] = useState(false);
    const { values, handleChange, handleSubmit } = useForm();

    useEffect(()=>{
        
        axios.get('http://localhost:5000/api/store/heroimage/6023583e65778950a0e595d0').then(res=>{
            console.log("response: ", res);
            setHeroImage(res.data.image);
            setUpdateDone(false);
        });
        
    }, [])
    
    const NewImage = (e) => {

        e.preventDefault();


        const url = 'http://localhost:5000/api/store/heroimage/update/6023583e65778950a0e595d0'
        const newImage = {
            image: values.image
        }
        console.log("newImage: ", values.image);

        axios.put(url, newImage).then(res=>{
            console.log(res.data)
            setUpdateDone(true);
        });

    }

    

    return (
        <React.Fragment>
            <Col/>
            <Col>
                <Row>
                    {!updateDone ? <div><h1>Current Hero image:</h1> <img src={heroImage} className="image_style" /></div> : <h1>Hero Image Updated!</h1>}
                </Row>
                
                <Form onSubmit={(e)=> NewImage(e)}>
                    <Form.Control type="text" placeholder="New Image Link..." name="image" value={values.image} onChange={handleChange}/>
                    <Button type="submit" >Submit</Button>
                </Form>
            
            </Col>
            
            <Col/>
        </React.Fragment>
    )
}
