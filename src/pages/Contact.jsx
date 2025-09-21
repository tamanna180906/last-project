import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch } from 'react-redux'
import {allproduct} from "../components/slice/productSlice"

function Contact() {
    let dispatch=useDispatch()
    let [text,setText]=useState('')

    let handleInput=(e)=>{
        setText(e.target.value);
        
    }
    let handleSubmit=()=>{
        dispatch(allproduct(text))
    }

    return (
        <div>
            <Container>
                <input onChange={handleInput} type='text'></input>
                <button onClick={handleSubmit}>Submit</button>
            </Container>
        </div>
    )
}

export default Contact