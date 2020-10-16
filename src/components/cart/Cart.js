import React, { useState, useEffect } from "react";
import api from "../../apis/index"
import photoProfile from "../../../src/photo-card.jpg";
import { Link } from "react-router-dom";

import photoCard from "../../../src/photo-card.jpg";
import minus from "../../../src/minus.svg";
import plus from "../../../src/plus.svg";
//import ConfirmationModal from '../../components/ConfirmationModal';




function Cart() {

  const [products, setProducts] = useState([]);
  
  (async function fetchData() {
    try {
      const response = await api.get("/product");
      response.json()
      console.log(response.data);
        setProducts(response.data);
    } catch (error) {
      console.error(error)
    }

  })();






  return (
    <div className="div-mother-cart d-flex justify-content-center align-items-center">
      <div className="box-cart d-flex flex-column ">
        <h1>Seu carrinho de compras!</h1>

        <table>
          <tbody>
            <tr>
              <td>Produto</td>
              <td>Preço</td>
              <td>Quantidade</td>
              <td>Total</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img
                  className="product-cart-photo"
                  src={photoCard}
                  alt="Card image cap"
                />
              </td>
              <td>R$ 350,00</td>
              <td>
                <div className="quantity">
                  <button className="plus-btn" type="button" name="button">
                    <img src={plus} alt="" />
                  </button>
                  <input type="text" name="name" value="1" />
                  <button className="minus-btn" type="button" name="button">
                    <img src={minus} alt="minus" />
                  </button>
                </div>
              </td>
              <td>R$ 350,00</td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
















export const Products = () => {
  
 
  async function addToCart(id, quantity) {

    const [products, setProducts] = useState([]);


    try {
      const response = await api.post("/product/:userId", {
       
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      alert("Item Added To Cart");
      console.log(data);
    } 
    
    catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <main>
      <section>
        <div className="banner-innerpage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 align-self-center text-center">
                <h1 className="title">Shop listing</h1>
                <h6 className="subtitle op-8">
                  We are small team of creative people working together
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  {products.map((product, i) => (
                    <div className="col-lg-4">
                      <div className="card shop-hover border-0">
                        <img
                          src={"http://localhost:4000/" + product.image}
                          alt="wrapkit"
                          className="img-fluid"
                        />
                        <div className="card-img-overlay align-items-center">
                          <button
                            onClick={(e) => addToCart(product._id, 1)}
                            className="btn btn-md btn-info"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className="card border-0">
                        <h6>
                          <a href="#" className="link">
                            {product.name}{" "}
                          </a>
                        </h6>
                        <h6 className="subtitle">by Wisdom</h6>
                        <h5 className="font-medium m-b-30">
                          $195 /{" "}
                          <del className="text-muted line-through">$225</del>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};




