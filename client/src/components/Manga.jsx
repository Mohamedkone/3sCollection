import React, { useState } from "react";
import Thumbnail from "../assets/kimetsu.jpg"
import "../style/Man.css"

const Manga = () =>{

        let boxCard = []
    for(let i = 0; i<20; i++){
        boxCard.push(<div className="manga-card">
            <img src={Thumbnail} alt="" />
            <div className="card-info">
                <h3>Lorem, ipsum.</h3>
                <h4 className="author">Lorem, ipsum.</h4>
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