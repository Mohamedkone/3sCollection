import React, { useState, useEffect } from "react";
import axios from "axios";
import Like from "../assets/like.png"
import Fav from "../assets/star.png"
import "../style/Man.css"
import { Link } from "react-router-dom";

const Manga = () =>{
    const [List, SetList] = useState()
    const [nbrGenre, SetNbr] = useState()

        useEffect(()=>{
        axios.get('http://localhost:3001/Manga').then(res =>{
          SetList(res.data)
          SetNbr(res.data.length)
        
        })
    },[])

    async function upd(id) {
        await axios.put(`http://localhost:3001/Manga/${id}`);
        window.location.reload()
     }
     useEffect(()=>{},[])

        let boxCard = []
        
    for(let i = 0; i<nbrGenre; i++){
        boxCard.push(<div className="inter">
             <div className="lf"><p><img src={Like} alt="" onClick={()=>{upd(List[i]._id)}}/><span>{List[i].like}</span></p><p><img src={Fav} alt="" /><span>{List[i].favorites}</span></p></div>
             <div  className="manga-card"><Link to={"/Read"} key={i-1}>
            <img src={require(`../${List[i].thumbnail}`)} alt="" key={i}/>
            <div className="card-info">
            <h3>{List[i].name}</h3>
            <h4 className="author">{List[i].creator}</h4>
            <p className="card-desc">{List[i].synopsis}
            </p>
        </div>
        </Link>
   
    </div></div>)
    }
    
    return (
    <div className="manga">
        <div className="title">
            <h1>Don't miss your favorite manga</h1>
            <h2>Next stop Wano Kuni</h2>
        </div>
        <div className="boxe">
            {boxCard}
        </div>
    </div>
    )
}

export default Manga