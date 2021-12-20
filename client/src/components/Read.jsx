import React from "react";
import "../style/Read.css"
const Read = () =>{
    let listOfImages
   const importAll =(r)=> {
        return r.keys().map(r);
    }
    const componentWillMount =() =>{
    
        listOfImages = importAll(require.context('../c851', false, /\.(png|jpe?g|svg)$/));
    }
    componentWillMount()
    return (
        <div className="readContainer">
            <div className="readNav">

            </div>
            <div className="imgContainer">
                <div className="scan">
                    {listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info"></img>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Read