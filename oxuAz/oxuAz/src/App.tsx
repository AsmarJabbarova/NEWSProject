import { useState } from "react";
import "./App.css";
import Navbarr from "./pages/Navbar/Navbarr";
import { Outlet } from "react-router-dom";
// import "./pages/Navbar/Navbarr";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbarr />
      <Outlet/>
      
    </>
  );
}

export default App;
