import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from "../../apis/index";
import photoCard from "../../../src/photo-card.jpg";
import ProductEdit from "../products/ProductEdit"
import App from "../../components/App"
// import DropButtom from '../../components/dropButtom/DropButton';


function ProductFeed(props){
  
  const products = [ ...props.productsState];
  
const [data, setData] = useState({});

const [q, setQ] = useState("")

useEffect(() => {
  fetch(products)
  
}, [products])
  // const filterArtesVisuais = props.products.find({artType: 'Artes Visuais'});
  // console.log(filterArtesVisuais)

 
  console.log(props)
  

  
  
  
  
  
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
                      
    return (
        <div className="div-mother-feed">

          {/* <DropButtom></DropButtom> */}
            <div className="d-flex justify-content-around">
                <p>Artes Literárias</p>
                <p>Audiovisual</p>
                <p>Artes visuais</p>
                <p></p>

                <input type="text" value={q} onChange={(e) => setQ(e.target.value)}></input>
            </div>
            <div className="profile-products-cards">
            {products.map((product) => <div data={data[0]} className="products-profile">
            <div className="card card-profile">
            <img
              className="card-img-top" src={product.mediaUrl} alt="Card image cap"/>
            <div className="card-body">
    <h5 className="card-title card-title-profile" >{product.title}</h5>
              <p className="card-text card-text-profile">
                {product.description}
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
          </div>)}
            </div>
        </div>
    )
}

export default ProductFeed;