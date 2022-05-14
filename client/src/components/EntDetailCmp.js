import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Card} from 'react-bootstrap'; 

const EntDetailCmp = (props) => {
    const [ent, entSetter] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/ents/" + id)
            .then( res => {
                console.log(res.data);
                entSetter(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <main>
            <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                <p>stringFieldOne: {ent.stringFieldOne}</p>
                <p>stringFieldTwo: {ent.stringFieldTwo}</p>
                <p>numberField: {ent.numberField}</p>
                <p> Additional fields to be added here.</p>
            </Card>
        </main>
    )
}
export default EntDetailCmp;