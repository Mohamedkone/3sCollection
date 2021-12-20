import React, { useState, useEffect } from "react";
import axios from "axios";
import Thumbnail from "../assets/kimetsu.jpg"
import "../style/Man.css"

const Manga = () =>{
    const [dep, Setdep] = useState("")
    const [List, SetList] = useState()
    const [nbrGenre, SetNbr] = useState()

        useEffect(()=>{
        axios.get('http://localhost:3001/Manga').then(res =>{
          SetList(res.data)
          SetNbr(res.data.length)
        
        })
    },[])
        let boxCard = []
        
    for(let i = 0; i<nbrGenre; i++){
        boxCard.push(<div key={i-1} className="manga-card">
        <img src={require(`../${List[i].thumbnail}`)} alt="" key={i}/>
        <div className="card-info">
            <h3>{List[i].name}</h3>
            <h4 className="author">{List[i].creator}</h4>
            <p className="card-desc">{List[i].synopsis}
            </p>
        </div>
    </div>)
    console.log(`../${List[1].thumbnail}`)
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