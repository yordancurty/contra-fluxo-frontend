import React, { useState, useEffect } from "react";
import photoProfile from "../../../src/photo-card.jpg";
import { Link } from "react-router-dom";
import photoCard from "../../../src/photo-card.jpg";
import minus from "../../../src/minus.svg";
import plus from "../../../src/plus.svg";




// const lessQuantity = (elem) => {
//   setCheckout(elem.quantity -= 1)
// }

// const moreQuantity = (elem) => {
//   setCheckout(elem.quantity += 1)
// }

// 0: "checkoutArr"
// 1: {_id: "5f85e19604ed43060889ff55", title: "oik oik", description: "porcos sao lindos", price: 10000222101, specifications: "tinta oleo sobre tela", …}
// 2:
// artType: "Artes Literárias"
// description: "porcos sao lindos"
// price: 10000222101
// specifications: "tinta oleo sobre tela"
// title: "oik oik"
// user: "5f84996f1fd9b4031028477f"
// __v: 0
// _id: "5f85e19604ed43060889ff55"




// useEffect(() => {
//   (async function fetchCheckout(props) {
//     try {
//       setState({
//         ...state,
//         [event.currentTarget.name]: event.currentTarget.value,
//       })
//     } catch (err) {
//       console.error(err);
//     }
//   })();
// }, []);


function Cart(props) {

  const checkout = props.checkout;
  const setCheckout = props.setCheckout;

  console.log(props)



  return (
    <div className="div-mother-cart d-flex justify-content-center align-items-center">
      <div className="box-cart d-flex flex-column ">
        <h1>Seu carrinho de compras!</h1>

        {/* TABELA TODA */}
        <table>
          <tbody>
            <tr>
              <td>Produto</td>
              <td>Preço</td>
              <td>Quantidade</td>
              <td>Total</td>
            </tr>
           
              
              {/* ESTRUTURA MODULAR PARA HTMLFOR DO JSX*/}
                {props.checkout.map((elem) => <tr key={elem[11]} className="products-profile">
                  <td>
                    {checkout[8]}
                    <img
                      className="product-cart-photo"
                      src={photoCard}
                      alt="Card image cap"
                    />
                  </td>
                  <td>R$ 350,00</td>
                  {/* <td>
                    <div className="quantity">
                      <button className="plus-btn" type="button" onClick={setCheckout(elem.quantity + 1)} name="button">
                        <img src={plus} alt="" />
                      </button>
                      <input type="text" name="name" value="1" />
                      <button className="minus-btn" type="button" onClick={setCheckout(elem.quantity - 1)} name="button">
                        <img src={minus} alt="minus" />
                      </button>
                    </div>
                  </td> */}
                </tr>)}
                
              {/* TOTAL   */}
              {/* <td>{state.total}</td> */}
            
          </tbody>
        </table>


        <div></div>
      </div>
    </div>
  );
}
export default Cart;
