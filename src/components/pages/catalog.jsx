import { useState, useEffect } from "react";
import axios from "axios";

function Catalog() {

    const [catalog, setCatalog] = useState([]);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [loader, setLoader] = useState(false)

    function getCatatalog(offset=0, count=10) {
        setLoader(true);
        axios.get(`http://localhost:3000/api/catalog?count=${count}&offset=${offset}`, {
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
                // handle error
                console.log(error);
            })
            .finally(function () {
                setLoader(false);
            });
    }
    ///

    useEffect(()=>{
        getCatatalog();
    }, []);

    function downloadMore() {
        const newOffset = offset + count;
        getCatatalog(newOffset);
    }

    return (
        <>
        <h1>Catalog</h1> 
            <ul>
                {
                    catalog.map(item=> {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
            {loader ? <p>Loading...</p> : "" }
            { (offset + count < total) && !loader  ? 
            <button onClick={downloadMore}>See more</button> : '' }
        </>
    )
}

export default Catalog;