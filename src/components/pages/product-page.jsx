import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import SingleProduct from "../single-product/single-product";

function ProductPage() {
    const {productId} = useParams();

    const postUrl = `http://localhost:3000/api/catalog/${productId}`;
    const [product, setProduct] = useState('');

    useEffect(()=>{
        console.log(postUrl);
        axios.get(postUrl, {
            headers: {
              Authorization: localStorage.getItem('token')
            }})
        .then((response)=>{
            console.log(response)
            setProduct(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <>
            <SingleProduct product={product} />
        </>
    )
}

export default ProductPage;