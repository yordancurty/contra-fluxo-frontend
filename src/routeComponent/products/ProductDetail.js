import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/index";




function ProductDetail(props){


    

    // const checkout = props.checkout;
    // const setCheckout = props.setCheckout;

    //console.log("props = ", props)
    

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

    //console.log("product = ", product)

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
    }, [id]);
    const history = useHistory();
    const passProdToCheckoutState = () => {
        props.setCheckout((previouState) =>{
            const prevState = [...previouState, product]
            //console.log(prevState)
            history.push("/cart")
            return [...prevState];
        })
    }

    return (
        <div className="geralContainer">

             <div className="titleProdDetail">
                  <h1>Product Detail</h1>
                  <hr></hr>
             </div>
             <div className="prodAllInfo">
                  <div className="productImg">
                      <img src={product.attachment} alt="Product attachment" />
                  </div>

                  <div className="productInfo">
                      <h3>{product.title}</h3>
                      {/* <h4>NOME DO ARTISTA AQUI</h4> */}
                      <p className="descriptionProdDet">{product.description}</p>
                      <p>Tipo: {product.artType}</p>
                      <p><strong>Especificações:</strong></p>
                      <p>{product.specifications}</p>
                      <p>Valor: {product.price},00</p>
                      {product._id ?  <button className="addToCartBtn" type="button" onClick={passProdToCheckoutState}> Adicionar ao Carrinho</button> : null}
                  </div>
             </div>
             

             <Link to={`/product-all`}>Back to products</Link>
        </div>
    );

}

export default ProductDetail;