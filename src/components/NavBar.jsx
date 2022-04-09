import React from "react";
import logo from "../assets/logo.svg"
import coin from "../assets/icons/coin.svg"

import s from "./NavBar.module.scss"

const NavBar = () => {

    return (

        <nav className={s.container}>
            <div className={s.logo}>
                <img src={logo}  width={"35px"} />
            </div>
            <div className={s.coin}>
                <h3>John Kite</h3>
                <img src={coin} />
            </div>

        </nav>

    )
}

export default NavBar;