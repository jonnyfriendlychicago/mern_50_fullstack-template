import React, {useEffect, useState} from 'react';
import axios from 'axios'; 

const EntFormCmp = () => {
    // const [message, messageSetter] = useState("Loading...")
    const [stringFieldOne, stringFieldOneSetter ] = useState("");
    const [stringFieldTwo, stringFieldTwoSetter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/ents", {
            stringFieldOne, 
            stringFieldTwo
        })
            .then(res=> {
                console.log(res); 
                console.log(res.data); 
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>stringFieldOne</label><br/>
                <input type="text" onChange={(e) => stringFieldOneSetter(e.target.value)}/>
            </p>
            <p>
                <label>stringFieldTwo:</label><br/>
                <input type="text" onChange={(e) => stringFieldTwoSetter(e.target.value)}/>
            </p>
            <input type="submit" />

        </form>
    )

}; 

export default EntFormCmp; 