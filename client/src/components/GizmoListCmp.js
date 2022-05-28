// ! findReplace all "Gizmo" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
import React, {useEffect} from 'react'
// import {useState} from 'react';  //! added for onDemand Sort stuff, not working presently
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import {Container, Row, Card, Table
    // , Form //! added for onDemand Sort stuff, not working presently
} from 'react-bootstrap'; 

const GizmoListCmp = (props) => {
    
    const {removeFromDom, gizmoList, gizmoListSetter} = props;

    
    useEffect(()=>{
    	axios
            .get("http://localhost:8000/api/gizmos")
            .then((res)=>{
                
                gizmoListSetter(res.data);
            })
            .catch((err)=>{console.log(err)})
    }, [gizmoListSetter])

    
    
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
            <Card style = {{width: '95%', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                <h2>Gizmos</h2>
                <Row>
                {
                    gizmoList.map((gizmoInstance, index)=>{
                    return (
                        <Card key={index} style = {{width: '15rem', padding: '0.5rem', border: "0.1rem solid grey",  margin: "0.25rem"}} >
                            <p>{gizmoInstance.createdAt}</p>
                            <p>{gizmoInstance.stringFieldOne}</p>
                            <p>{gizmoInstance.numberField}</p>
                            {gizmoInstance.isBoolean ? <p>ISboolean</p> : <p>isNOTboolean</p>}
                            <p> {gizmoInstance.enumString}</p>
                            <p>listField:</p>
                            <p>{gizmoInstance.listField && gizmoInstance.listField.join(';')}</p>
                            {/* TRYING AGAIN WITH MAP APPROACH...  */}
                            {/* <ul>
                                {
                                    gizmoInstance.listField.map((listFieldEntry.stringFieldOne, index) => {
                                        <li key={index}>
                                            {listFieldEntry}
                                        </li>
                                    })
                                }
                            </ul> */}
                            <Link to={`/gizmos/${gizmoInstance._id}`}>Details</Link>
                            {/* <Link to={`/gizmos/edit/${gizmoInstance._id}`}>Edit</Link> */}
                            {/* <Button onClick={(e)=>{handleDelete(gizmoInstance._id)}}>Delete</Button> */}
                        </Card>
                    )
                    })
                }
                </Row>
            </Card>
            </Row>

            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gizmoList.map((gizmoInstance, index)=>{
                            return (
                                <tr>
                                    <td>{gizmoInstance.stringFieldOne}</td>
                                    <td>{gizmoInstance.numberField}</td>
                                    <td>
                                    <Link to={`/gizmos/${gizmoInstance._id}`}>details</Link> | <Link to={`/gizmos/edit/${gizmoInstance._id}`}>edit</Link>
                                    </td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </Table>    
            </Row>

        </Container>
    )
}; 

export default GizmoListCmp;
