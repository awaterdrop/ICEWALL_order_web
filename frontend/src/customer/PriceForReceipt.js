import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, minusAmount } from "./store";
import { Table } from "react-bootstrap";

function Price({ id }) {
  const [value, setValue] = useState(0);

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  if (state.cart[id].amount === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <Table>
          {state.cart[id].amount === 0 ? null : (
            <tbody>
              <tr>
                <td>{state.cart[id].name}</td>
                <td>{state.cart[id].price * state.cart[id].amount}</td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    );
  }
}

export default Price;
