import React, { useState } from "react";
import Header from "../components/header/Header";

function Detail({ image }) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}

export default Detail;
