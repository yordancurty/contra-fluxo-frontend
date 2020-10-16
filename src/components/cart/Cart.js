// import React, { useState, useEffect } from "react";
// import photoProfile from "../../../src/photo-card.jpg";
// import { Link } from "react-router-dom";
// import photoCard from "../../../src/photo-card.jpg";
// import minus from "../../../src/minus.svg";
// import plus from "../../../src/plus.svg";


// const [checkout, setCheckout] = useState({total : 0})

// const lessQuantity = (elem) => {
//   setCheckout(elem.quantity -= 1)
// }

// const moreQuantity = (elem) => {
//   setCheckout(elem.quantity += 1)
// }






// // useEffect(() => {
// //   (async function fetchCheckout(props) {
// //     try {
// //       setState({
// //         ...state,
// //         [event.currentTarget.name]: event.currentTarget.value,
// //       })
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   })();
// // }, []);


// function Cart(props) {

//   console.log(props)

//   return (
//     <div className="div-mother-cart d-flex justify-content-center align-items-center">
//       <div className="box-cart d-flex flex-column ">
//         <h1>Seu carrinho de compras!</h1>

//         {/* TABELA TODA */}
//         <table>
//           <tbody>
//             <tr>
//               <td>Produto</td>
//               <td>Preço</td>
//               <td>Quantidade</td>
//               <td>Total</td>
//             </tr>
//             <tr>
              
//               {/* ESTRUTURA MODULAR PARA HTMLFOR DO JSX*/}
//                 {products.map((elem) => <div key={elem._id} className="products-profile">
//                   <td>
//                     {/* {checkout[0]} */}
//                     <img
//                       className="product-cart-photo"
//                       src={photoCard}
//                       alt="Card image cap"
//                     />
//                   </td>
//                   <td>R$ 350,00</td>
//                   <td>
//                     <div className="quantity">
//                       <button className="plus-btn" type="button" onClick={setCheckout(elem.quantity + 1)} name="button">
//                         <img src={plus} alt="" />
//                       </button>
//                       <input type="text" name="name" value="1" />
//                       <button className="minus-btn" type="button" onClick={setCheckout(elem.quantity - 1)} name="button">
//                         <img src={minus} alt="minus" />
//                       </button>
//                     </div>
//                   </td>
//                 </div>)}
                
//               {/* TOTAL   */}
//               {/* <td>{state.total}</td> */}
//             </tr>
//           </tbody>
//         </table>


//         <div></div>
//       </div>
//     </div>
//   );
// }
// export default Cart;
