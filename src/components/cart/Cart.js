import React, { useState, useEffect } from "react";
import photoProfile from "../../../src/photo-card.jpg";
import { Link } from "react-router-dom";
import photoCard from "../../../src/photo-card.jpg";
import minus from "../../../src/minus.svg";
import plus from "../../../src/plus.svg";







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

  let totalCart = 0
  let totalPrice = 0;
  let taxaEntrega =0;
  

  checkout.map((elem)=>{
    totalCart += elem.price;
    taxaEntrega = Math.floor((totalCart/9))
    totalPrice = totalCart + taxaEntrega;
    console.log("elem =", elem)
  })

  // const 

  // const lessQuantity = () => {
      
  //   }
  
  
  // const moreQuantity = (elem) => {
  //   setCheckout(elem.quantity += 1)
  // }

  console.log("props = ", props)
  console.log("totalPrice =", totalPrice)
  

  return (
    <div className="div-mother-cart d-flex justify-content-center align-items-center">
          <div className="box-cart d-flex ">

                <div className=" pairTitleAndTable d-flex flex-column ">
                      <div className="cartTitle">
                          <h1>Seu carrinho de compras</h1>
                      </div>

                  
                      {/* TABELA TODA */}
                      <table>
                      <tbody>
                        <tr className="lineOfTitles">
                          <td className="prodTitle">Produto</td>
                          <td className="priceTitle">Preço</td>
                          {/* <td>Quantidade</td> */}
                          {/* <td>Total</td> */}
                        </tr>
                      
                          
                          {/* ESTRUTURA MODULAR PARA HTMLFOR DO JSX*/}
                            {props.checkout.map((elem, idx) => <tr key={idx} className="productsInCart">

                              <td className="productMiniBlock">
                                <div>
                                  <img
                                    className="product-cart-photo"
                                    src={elem.midia}
                                    alt="Card image cap"
                                  />
                                {elem.title}
                                </div>
                              </td>

                              <td className="priceInMiniBlock">R$ {elem.price},00</td>

                              {/* <td>
                                <div className="quantity">
                                  <button className="plus-btn" type="button"  name="button">
                                    <img src={plus} alt="" />
                                  </button>
                                  <input type="text" name="name" value="1" />
                                  <button className="minus-btn" type="button"  name="button">
                                    <img src={minus} alt="minus" />
                                  </button>
                                </div>
                              </td> */}

                              
                            </tr>)}
                            
                          {/* TOTAL DAQUELE PRODUTO  */}
                          {/* <td>{state.total}</td> */}
                        
                      </tbody>
                    </table>
                </div>               
                  
                    {/* RESUMO DA COMPRA */}
                      <div className="chekoutResumeBox">
                            <div className="resumeTitle">
                              <h2>Finalize sua compra e suporte artistas independentes</h2>
                            </div>
                            <div>
                                  <div className="custosResumo">
                                      <p>Total do carrinho: R$ {totalCart},00</p>
                                      <p>Valor da entrega: R$ {taxaEntrega},00</p>
                                  </div>
                                  <div className="totalAndFinalizeButton">
                                      <p>Total do Geral: R$ {totalPrice},00</p>
                                      <button><Link className="finalizarCompraButton"to="/thankYou">Finalizar Compra</Link></button>
                                  </div>
                            </div>
                      </div>
                        
          </div>
    </div>
  );
}
export default Cart;
