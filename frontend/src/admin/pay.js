import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Pay() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return <div>pay</div>;
}

export default Pay;
