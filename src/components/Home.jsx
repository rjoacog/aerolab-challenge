import React from "react";

import header from "../assets/header.png"

import s from "./Home.module.scss"


const Home = () => {

    return(
        <div className={s.container}>
            <img src={header}  />
            <h1>Electronics</h1>
        </div>

    )
}

export default Home;