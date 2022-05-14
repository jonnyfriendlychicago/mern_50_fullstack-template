import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import {Container, Row, Card} from 'react-bootstrap'; 

const EntListCmp = (props) => {
    
    const {entList, entListSetter} = props;
    
    useEffect(()=>{
    	axios
            .get("http://localhost:8000/api/ents")
            .then((res)=>{
                console.log(res.data);
                entListSetter(res.data);
            })
            .catch((err)=>{console.log(err)})
    }, [])
    
    return (
        <Container> 
            <Row>
                {/* <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem" }}> */}
                    <h2>Ents</h2>
                    {
                        entList.map((ent, index)=>{
                        return (
                            // <div key={index}>
                            <Card style = {{width: '15rem', padding: '0.5rem', border: "0.1rem solid grey",  margin: "0.25rem"}} >
                                <p >{ent.stringFieldOne}</p>
                                <p> {ent.stringFieldTwo}</p>
                                <p> {ent.numberField}</p>
                                <p> Additional fields to be added here.</p>
                                <Link to={`/ents/${ent._id}`}>{ent.stringFieldOne} Details</Link>
                            </Card>
                            // </div>
                        )
                        })
                    }
                {/* </Card> */}
            </Row>
        </Container>
    )
}; 

export default EntListCmp;
