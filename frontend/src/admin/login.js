import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInButton } from "../customer/store";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickSignup = () => {
    navigate("/signup");
  };
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  const state = useSelector((state) => {
    return state;
  });
  const onChangeID = (e) => {
    setName(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <h3>로그인</h3>
      <br />
      <div className="form">
        <div className="form-el">
          <label htmlFor="name">ID</label> <br />
          <input value={name} onChange={onChangeID} />
        </div>
        <br />
        <div className="form-el">
          <label htmlFor="password">비밀번호</label> <br />
          <input value={password} onChange={onChangePw} />
        </div>

        <br />
        <button
          onClick={() => {
            dispatch(logInButton({ id: name, pw: password }));
            localStorage.setItem("id", name);
            localStorage.setItem("pw", password);
            console.log(name);
            console.log(state.user[0].pw);
          }}
        >
          로그인
        </button>
        <br />
        <br />
        <button onClick={clickSignup} className="signupButton">
          회원가입
        </button>
        <p> id: {state.user[0].id}</p>
        <p> pw: {state.user[0].pw}</p>
      </div>
    </>
  );
}

export default Login;
