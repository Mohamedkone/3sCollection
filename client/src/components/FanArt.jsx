import React from "react";
import "../style/Fan.css"
const Fan_art = () =>{
    return (
        <div className="artPage">
            <div className="changePage">
                <button className="page">Previous</button>
                <div className="pageN">1 2 3 ...</div>
                <button className="page">Next</button>
            </div>
        </div>
    )
}

export default Fan_art