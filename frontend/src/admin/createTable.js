import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./createTable.css";
import HeaderForAdmin from "../components/header/HeaderForAdmin";
import { setSelected, setUsing, setTableGroupID } from "../customer/store";

function CreateTable() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  console.log(state.table);
  const [tableGroupId, setTableGroupId] = useState(1);

  return (
    <>
      <div className="createTable">
        <HeaderForAdmin />
        <div className="table_buttons">
          {state.table.map((a, i) => (
            <button
              disabled={state.table[i].selected === 2 ? true : false}
              className={`table_button ${
                state.table[i].selected === true
                  ? "active"
                  : "" || state.table[i].selected === 2
                  ? "using"
                  : ""
              }`}
              onClick={() => {
                dispatch(setSelected(i));
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <hr />
      <div className="table_buttons">
        {state.table.map((a, i) => {
          if (state.table[i].selected === true) {
            return <button className="selectedTableButton">{i + 1}</button>;
          }
        })}
      </div>

      <div className="createTableButtonContainer">
        <button
          className="createTableButton"
          onClick={() => {
            dispatch(setTableGroupID(tableGroupId));
            setTableGroupId(tableGroupId + 1);
            dispatch(setUsing());
          }}
        >
          Create Table
        </button>
      </div>
    </>
  );
}

export default CreateTable;
