import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import SingleProduct from "../single-product/single-product";
import Loader from "../loader/loader"; 

function ProductPage() {
    const {productId} = useParams();

    const [loader, setLoader] = useState(false);

    const postUrl = `http://localhost:3000/api/catalog/${productId}`;
    const [product, setProduct] = useState('');

    useEffect(()=>{
        setLoader(true);

        axios.get(postUrl, {
            headers: {
              Authorization: localStorage.getItem('token')
            }})
        .then((response)=>{
            setLoader(false);
            setProduct(response.data);
        })
    }, []);

    return (
        <>
            {loader ? <Loader /> : 
            <SingleProduct product={product} />
             }
            
        </>
    )
}

export default ProductPage;