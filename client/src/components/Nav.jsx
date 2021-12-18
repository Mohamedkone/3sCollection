import React from "react";
import Logo from "../assets/3s.svg"
import { useState } from "react";
import "../style/Nav.css"
import Light from "../assets/light_shift.svg"
import Night from "../assets/night_shift.svg"

const Nav = () =>{
    const [shift, setShift] = useState(Light)
    let [i, setI] = useState(0)

    const Mode = () =>{
        if (i==1){
           
            setShift(Light)
            setI(0)
            console.log("night", i)
        }else{
            setShift(Night)
            setI(1)
            console.log("light", i)
            
        }
    }

    return (
        <header>
            <div className="top">
                <div className="toggle">
                   <img onClick={Mode} src={shift} alt="" />

                </div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="userLog">
                    <button>Log In</button>
                    <button>Sign In</button>
                </div>
            </div>
            <nav className="top-nav">
                <ul>
                    <li>Manga</li>
                    <li>Manwha</li>
                    <li>Fan Art</li>
                    <li>Community</li>
                </ul>
                <div className="search"><input type="text" placeholder="Search..." /></div>
            </nav>
        </header>
    
        )
}

export default Nav