import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
    let productId = useParams()
    let [cat,setCat]=useState([])

    let singleProduct = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            console.log(response.id);
            
        })
    }


    useEffect(() => {
        singleProduct()
    }, [])

    return (
        <div className=''>
            <Container>
                ProductDetails
            </Container>
        </div>
    )
}

export default ProductDetails