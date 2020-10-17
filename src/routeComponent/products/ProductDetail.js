import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../apis/index";




function ProductDetail(props){


    

    const checkout = props.checkout;
    const setCheckout = props.setCheckout;

    console.log("props = ", props)
    

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

    console.log("product = ", product)

    useEffect(() => {
        (async function fetchProduct() {
        try {
            const result = await api.get(`/product/${id}`);

            // const result = await api.get(`/product/${id}`);

            setProduct({ ...result.data});
        } catch (err) {
            console.error(err);
        }
        })();   
    }, []);

    const passProdToCheckoutState = () => {
        props.setCheckout((previouState) =>{
            const prevState = [...previouState, product]
            console.log(prevState)
            return [...prevState];
        })
    }

    return (
        <div>

            <h1>Product Detail</h1>
            <hr></hr>

            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.attachment} alt="Product attachment" />
               {product._id ?  <button type="button" onClick={passProdToCheckoutState}> Adicionar ao Carrinho</button> : null}
            </div>

            <Link to={`/projects/${product.project}`}>Back to project</Link>
        </div>
    );

}

export default ProductDetail;