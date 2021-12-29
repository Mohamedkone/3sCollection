import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../style/Fan.css"
const Fan_art = () =>{
    const [art, SetArt] = useState()
    const [count, SetCount] = useState()
    useEffect (()=>{
        axios.get('http://localhost:3001/Fan_Art').then(res=>{
            SetArt(res.data)
            SetCount(res.data.length)
        })
    },[])
    let fanCard = []
    for(let i = 0; i<count; i++){
        fanCard.push(<div key={i-1} className="fan-card">
            <img src={require(`../${art[i].path}`)} alt="" />
            <div className="fan-info">
                <h5 className="author">{art[i].title}</h5>
                <h6 className="author">by: {art[i].creator}</h6>
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