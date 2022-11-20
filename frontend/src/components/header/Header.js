import { useNavigate } from "react-router-dom";
import React from "react";
import "./Header.css";
import { AiOutlineHome } from "react-icons/ai";
function Header() {
  const navigate = useNavigate();
  const clickHeader = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <button onClick={clickHeader} className="header_btn">
        {/*<img*/}
        {/*  className="header_logo"*/}
        {/*  src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"*/}
        {/*  alt="my image"*/}
        {/*/>*/}
        <AiOutlineHome className="homeIcon" />
      </button>

      <pr />
      <div className="header_title">
        Hanyang Univ.
        <br /> Computer Software 주점
      </div>
    </div>
  );
}

export default Header;

// import React from "react";
// import { AppBar, Tabs, Tab } from "@material-ui/core";
// import { Home, Send, Person } from "@material-ui/icons";
//
// const Header = () => {
//   const [value, setValue] = React.useState(0);
//
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//     <>
//       <AppBar position="static">
//         <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
//           <Tab label="Home" icon={<Home />} />
//           {/*<Tab label="Home" />*/}
//           <Tab label="Send" icon={<Send />} />
//           <Tab label="Profile" icon={<Person />} />
//         </Tabs>
//       </AppBar>
//     </>
//   );
// };
//
// export default Header;
