import React, {useEffect, useState} from "react";
import axios from "axios"
import "../style/Read.css"
const Read = () =>{
    const [List, SetList] = useState("")
    const [nbrGenre, SetNbr] = useState()
    const [dele, Setdel] = useState()
    
    let listOfImages
   const importAll =(r)=> {
        return r.keys().map(r);
    }
    const componentWillMount =() =>{
    
        listOfImages = importAll(require.context('../c851', false, /\.(png|jpe?g|svg)$/));
    }
    useEffect(()=>{
        axios.get('http://localhost:3001/Read').then(res =>{
            SetList(res.data)
            SetNbr(res.data.length)
                    
          })
        })
        async function deletePost(id) {
            await axios.delete(`http://localhost:3001/Read/${id}`);
            Setdel('Delete successful');
            window.location.reload()
         }
         useEffect(()=>{},[deletePost])
    
        let comms = []
    for(let i = 0; i<nbrGenre; i++){
        comms.push(<div key={i-1} className="message">
        <div className="userIName">{List[i].username}</div>
        <div className="com-bubble">
                <div className="useICom">{List[i].message}</div>
        </div>
        
        <button className="del" onClick={() =>{
            deletePost(List[i]._id)
        }}>X</button>
        </div>
            
        )
    }
    
    

    componentWillMount()
    
    return (
        <div className="readers">
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
        <div className="com-section">
            <form method="POST">
                <div className="user-info">
                <label>Username</label>
                <input type="text" name="username" className="username" />
                </div>
                <div className="com-info">
                    <label>Comments</label>
                <textarea className="comments" name="comments" rows="4" cols="50" />
                </div>
                <button>Submit Comments</button>
            </form>
            <div className="show-com">
                {comms}
            </div>
        </div>
        </div>
    )
}

export default Read