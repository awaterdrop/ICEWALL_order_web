import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Pay() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <>
      <div>
        {state.table.map(function (a) {
          for (let i = 0; i < 8; i++) {
            if (a.tableGroupId === i) {
              return a.tableGroupId;
            }
          }
        })}
      </div>
    </>
  );
}

export default Pay;
