import * as React from "react";

import logo from "../assets/logo.svg";
import Home from "../components/Home";
import NavBar from "../components/NavBar";



import styles from "./App.module.scss";

const App = () => {
  return (
    <>
       <NavBar />
  
       <Home />
       
    </>
  
  );
};

export default App;
