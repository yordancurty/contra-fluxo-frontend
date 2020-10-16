import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../apis/index";

function ProductDetail(){

    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        description: "",
        specifications: "",
        user: "",
        artType: "default",
        subCategory: "default",
        media: "",
        price: 0,
    });

    useEffect(() => {
        (async function fetchProduct() {
        try {
            const result = await api.get(`/product/${id}`);

            // const result = await api.get(`/product/${id}`);

            setProduct({ ...result.data[0] });
        } catch (err) {
            console.error(err);
        }
        })();   
    }, []);

    return (
        <div>

            <h1>Product Detail</h1>
            <hr></hr>

            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.attachment} alt="Product attachment" />
            </div>

            <Link to={`/projects/${product.project}`}>Back to project</Link>
        </div>
    );

}

export default ProductDetail;