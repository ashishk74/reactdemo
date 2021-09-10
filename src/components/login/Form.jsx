import React, { useState } from 'react'
import { auth } from '../../firebase';
import {useHistory} from "react-router-dom";



function Form() {
    const [uname, setUname] = useState("")
    const [pword, setPword] = useState("")
    const history = useHistory();
    const handleChange = (e) => {
        setUname(e.target.value);
    }
    const handleSubmit =(e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(uname,pword).then( (auth) => {
           history.push("/home")
       }) .catch( (e) => {
            alert(e.message)
       })
}

    return (
        <div>
            <h1> Login Form</h1>
            <h2>Login name</h2>
            <input value= {uname} onChange={handleChange} /><br/><br/>
            <h2>Password</h2>
            <input value= {pword} onChange={(e) => setPword(e.target.value)}/><br/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form
