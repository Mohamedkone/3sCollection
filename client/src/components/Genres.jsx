import React, { useState, useEffect} from "react";
import axios from "axios";
import "../style/Man.css"



const Genres = () =>{
    const [List, SetList] = useState()
    const [nbrGenre, SetNbr] = useState()

        useEffect(()=>{
        axios.get('http://localhost:3001/type').then(res =>{
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
                <p className="card-desc">Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Sunt nesciunt fuga molestias corporis 
                    fugit culpa obcaecati nobis voluptate 
                    earum voluptatibus!
                </p>
            </div>
        </div>)
    }
    return (
    <div className="manga">
        <div className="title">
            <h1>Find The Genres You Love</h1>
            <h2>Let's  dive into the Manga World</h2>
        </div>
        <div className="boxe">
            {boxCard}
        </div>
    </div>
    )
}

export default Genres