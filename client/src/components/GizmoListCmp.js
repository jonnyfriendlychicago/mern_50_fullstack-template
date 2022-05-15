// ! findReplace all "Gizmo" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import {Container, Row, Card, Button} from 'react-bootstrap'; 

const GizmoListCmp = (props) => {
    
    // const {gizmoList, gizmoListSetter} = props;
    const {removeFromDom, gizmoList, gizmoListSetter} = props;
    
    useEffect(()=>{
    	axios
            .get("http://localhost:8000/api/gizmos")
            .then((res)=>{
                console.log(res.data);
                gizmoListSetter(res.data);
            })
            .catch((err)=>{console.log(err)})
    }, [])
    
    const handleDelete = (id) => {
        axios
            .delete('http://localhost:8000/api/gizmos/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <Container> 
            <Row>
                <h2>Gizmos</h2>
                {
                    gizmoList.map((gizmo, index)=>{
                    return (
                        <Card key={index} style = {{width: '15rem', padding: '0.5rem', border: "0.1rem solid grey",  margin: "0.25rem"}} >
                            <p >{gizmo.stringFieldOne}</p>
                            <p> {gizmo.stringFieldTwo}</p>
                            <p> {gizmo.numberField}</p>
                            <p> Additional fields to be added here.</p>
                            <Link to={`/gizmos/${gizmo._id}`}>Details</Link>
                            <Link to={`/gizmos/edit/${gizmo._id}`}>Edit</Link>
                            <Button onClick={(e)=>{handleDelete(gizmo._id)}}>Delete</Button>
                        </Card>
                    )
                    })
                }
            </Row>
        </Container>
    )
}; 

export default GizmoListCmp;
