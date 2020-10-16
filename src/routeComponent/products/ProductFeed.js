import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from "../../apis/index";
import photoCard from "../../../src/photo-card.jpg";
import ProductEdit from "../products/ProductEdit"

function ProductFeed(props){

  
        console.log(props)
       const products = [ ...props.productsState];
      
       useEffect(() => {
        (async function fetchUser() {
          try {
    
            const productResponse = await api.get("/product");
    
            console.log("PRODUCT" ,productResponse);
    
    
            props.setProducts([ ...productResponse.data]);
          } catch (err) {
            console.error(err);
          }
        })();
      }, []);
    

           

 
    //    const [category, setCategory] = useState();
    //    const [subCategory, setSubCategory] = useState()
        
       
    //    const handleFilterChange = (event, filterType) => {
    //        switch (filterType) {
    //            case "category":
    //                setCategory(event.target.value)
    //                 break;
    //             case "subCategory":
    //                 setSubCategory(event.target.value)
    //                 break;
           
    //            default: break;
    //         }
    //     }
                      


    return (
        <div className="div-mother-feed">
            <div className="d-flex justify-content-around">
                <p>Artes Literárias</p>
                <p>Audiovisual</p>
                <p>Artes visuais</p>
                <p></p>
            </div>
            <div className="">
            {products.map((product) => <div className="card card-profile">
            <img
              className="card-img-top" src={product.mediaUrl} alt="Card image cap"/>
            <div className="card-body">
    <h5 className="card-title card-title-profile">{product.title}</h5>
              <p className="card-text card-text-profile">
                {product.description}
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>)}
            </div>
        </div>
    )
}

export default ProductFeed;