import React from "react";
import "../style/Fan.css"
import Thumbnail from "../assets/kimetsu.jpg"
const Fan_art = () =>{
    
    let fanCard = []
    for(let i = 0; i<20; i++){
        fanCard.push(<div className="fan-card">
            <img src={Thumbnail} alt="" />
            <div className="fan-info">
                <h3>Lorem, ipsum.</h3>
                <h4 className="author">Lorem, ipsum.</h4>
            </div>
        </div>)
    }


    return (
        <div className="artPage">
            <div className="changePage">
                <button className="page">Previous</button>
                <div className="pageN">1 2 3 ...</div>
                <button className="page">Next</button>
            </div>
            <div className="fanContainer">
                {fanCard}
            </div>
        </div>
    )
}

export default Fan_art