import React from "react";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
};

function SignUp() {
  let password, name;
  return (
    <>
      <h3>회원가입</h3>
      <div className="form">
        <div className="form-el">
          <label htmlFor="name">닉네임</label> <br />
          <input id="name" name="name" value={name} />
        </div>
        <div className="form-el">
          <label htmlFor="password">비밀번호</label> <br />
          <input id="password" name="password" value={password} />
        </div>
        <br />
        <button type="submit">확인</button>
      </div>
    </>
  );
}

export default SignUp;
