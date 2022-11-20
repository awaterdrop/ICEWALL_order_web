import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MainCustomer from "./customer/mainCustomer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          console.log("hi");
          <Header />
          <MainCustomer />
        </Route>

        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
