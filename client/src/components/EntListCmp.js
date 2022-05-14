import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import {Card} from 'react-bootstrap'; 

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
        <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
            {
                entList.map((ent, index)=>{
                return (
                    <div key={index}>
                        <p >{ent.stringFieldOne}</p>
                        <p> {ent.stringFieldTwo}</p>
                        <p> {ent.numberField}</p>
                        <p> Additional fields to be added here.</p>
                        <Link to={`/ents/${ent._id}`}>{ent.stringFieldOne} Details</Link>
                    </div>
                )
                })
            }
        </Card>
    )
}; 

export default EntListCmp;
