import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const clickSignup = () => {
    navigate("/signup");
  };
  let name, password;
  return (
    <>
      <h3>로그인</h3>
      <br />
      <div className="form">
        <div className="form-el">
          <label htmlFor="name">닉네임</label> <br />
          <input id="name" name="name" value={name} />
        </div>
        <br />
        <div className="form-el">
          <label htmlFor="password">비밀번호</label> <br />
          <input id="password" name="password" value={password} />
        </div>
        <br />
        <button type="login">로그인</button>
        <br />
        <br />
        <button onClick={clickSignup} className="signupButton">
          회원가입
        </button>
      </div>
    </>
  );
}

export default Login;
