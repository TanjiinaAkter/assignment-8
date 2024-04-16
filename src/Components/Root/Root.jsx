import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

// import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

import Home from "../Home/Home";
import { createContext, useState } from "react";
// import Banner from "../Banner/Banner";
export const InputContext = createContext();
const Root = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue)
  return (
    <div>
      {/* <h1>root or main page</h1>  "background "*/}
      <InputContext.Provider value={{ inputValue, setInputValue }}>
        <div className="mx-auto max-w-7xl">
          <Header></Header>
          {/* <Banner></Banner> */}
          <Outlet>
            <Home></Home>
          </Outlet>
        </div>
      </InputContext.Provider>

      <Footer></Footer>
    </div>
  );
};

export default Root;
