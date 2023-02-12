import React, { useState } from "react";
import "./food.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Food({ product }) {
  const { id, name, price, image, amount } = product;

  return (
    // <div className="food">
    //   <Link to={`/detail/${id}`}>
    //     <img className="food_img" src={image} alt="" />
    //   </Link>
    //
    //   <div text="text">
    //     <div className="food_info">
    //       <p className="food_name">{name}</p>
    //       <p className="food_price">
    //         <small>가격</small>
    //         <strong>{price}</strong>
    //         <small>원</small>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Table>
        <tbody>
          <tr>
            <td>
              <Link to={`/detail/${id}`}>
                <img className="food_img" src={image} alt="" />
              </Link>
            </td>
            <td className="name">{name}</td>
            <td>{price}원</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Food;
