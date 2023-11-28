import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CatalogList from "../catalog-list/catalog-list";
import ButtonSeeMore from "../button-see-more/button-see-more";
import Loader from "../loader/loader";
import { useSelector } from "react-redux";

function Catalog() {
    const auth = useSelector((state)=>state.auth.auth);

    const [catalog, setCatalog] = useState([]);

    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const [loader, setLoader] = useState(false);

    const port = document.location.port;

    function getCatatalog(offset=0, count=12) {
        setLoader(true);
        axios.get(`http://localhost:${port}/api/catalog?count=${count}&offset=${offset}`, {
            headers: {
              Authorization: localStorage.getItem('token')
            }})
            .then(function (response) {
                setCatalog(prev=>prev.concat(response.data.products));
                setOffset(response.data.offset);
                setCount(response.data.count);
                setTotal(response.data.total);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoader(false);
            });
    }

    useEffect(()=>{
        if(auth) {
            getCatatalog();
        }

    }, [auth]);

    function downloadMore() {
        const newOffset = offset + count;
        getCatatalog(newOffset);
    }

    return (
        <>
            <h1>Catalog</h1> 
           {catalog.length ? 
           <CatalogList catalog={catalog} />
            : <p>To see catalog you need <Link to="/login">LogIn</Link></p> }
            {loader ? <Loader /> : "" }
            { (offset + count < total) && !loader  ? 
            <ButtonSeeMore downloadMore={downloadMore} /> : '' }
        </>
    )
}

export default Catalog;