import React, { useState } from "react";
import photoProfile from "../../../src/photo-card.jpg";
import { Link } from 'react-router-dom';
import photoCard from '../../../src/photo-card.jpg';
import minus from '../../../src/minus.svg';
import plus from '../../../src/plus.svg';
function Cart() {
  return (
    <div className="div-mother-cart d-flex justify-content-center align-items-center">
      <div className="box-cart d-flex flex-column" >
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
                {""}
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