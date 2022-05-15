// ! findReplace all "Gizmo" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Card} from 'react-bootstrap'; 

const GizmoDetailCmp = (props) => {
    const [gizmo, gizmoSetter] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/gizmos/" + id)
            .then( res => {
                console.log(res.data);
                gizmoSetter(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <main>
            <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                <p>stringFieldOne: {gizmo.stringFieldOne}</p>
                <p>stringFieldTwo: {gizmo.stringFieldTwo}</p>
                <p>numberField: {gizmo.numberField}</p>
                <p> Additional fields to be added here.</p>
            </Card>
        </main>
    )
}
export default GizmoDetailCmp;