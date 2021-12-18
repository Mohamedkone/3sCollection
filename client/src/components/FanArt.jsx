import React from "react";
import "../style/Fan.css"
import Thumbnail from "../assets/kimetsu.jpg"
const Fan_art = () =>{
    
    let fanCard = []
    for(let i = 0; i<20; i++){
        fanCard.push(<div className="fan-card">
            <img src={Thumbnail} alt="" />
            <div className="fan-info">
                <h5 className="author">by: DocxDiablo</h5>
            </div>
        </div>)
    }


    return (
        <div className="artPage">
            <div className="searchSec">
                <input type="text" placeholder="Search for genres here..."/>
                <div className="genres">
                    <span className="genre1">Pixel Art</span>
                    <span className="genre2">Cosplay</span>
                    <span className="genre3">Fantasy</span>
                    <span className="genre4">Digital Art</span>
                    <span className="genre5">Sci-fi</span>
                </div>
            </div>
            <div className="changePage">
                <button className="page">Previous</button>
                <div className="pageN">1 2 3 ...</div>
                <button className="page">Next</button>
            </div>
            <div className="fanContainer">
                {fanCard}
            </div>
            <div className="changePage">
                <button className="page">Previous</button>
                <div className="pageN">1 2 3 ...</div>
                <button className="page">Next</button>
            </div>
        </div>
    )
}

export default Fan_art