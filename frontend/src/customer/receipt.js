import Header from "../components/header/Header";

import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

import React from "react";
import PriceForReceipt from "./PriceForReceipt";

function Receipt() {
  let state = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <Header />
      <div>
        <Table>
          <thead>
            <tr>
              <th>상품명</th>
              <th>상품가격</th>
            </tr>
          </thead>
        </Table>
        <div className="cart">
          {/*  {products.map((product) => (*/}
          {/*    <Price product={product} key={product.id} />*/}
          {/*  ))}*/}
          {state.cart.map((a, i) => (
            <PriceForReceipt id={i} key={i} />
          ))}
        </div>
        <h3>총가격:</h3>
      </div>
    </div>
  );
}
export default Receipt;
