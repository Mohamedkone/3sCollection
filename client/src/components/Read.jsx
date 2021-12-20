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
            <form action="Post">
                <div className="user-info">
                <label>Username</label>
                <input type="text" name="username" className="username" />
                </div>
                <div className="com-info">
                    <label>Comments</label>
                <textarea className="comments" name="comments" rows="4" cols="50" />
                </div>
            </form>
            <div className="show-com">
            <div className="userIName">regege</div>
                <div className="com-bubble">
                        <div className="useICom">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate distinctio magnam fugit quas labore itaque, soluta recusandae doloremque? Eius alias aliquid aperiam ad cum porro repudiandae odit sapiente omnis vero eos, praesentium dolorem ipsa quos modi asperiores dolore facilis, tempora sunt quidem optio vel voluptatum dolor. Repellendus nisi tempore quaerat! Delectus tempora eaque officiis veniam nemo laudantium praesentium ratione quod quas, autem et magnam, optio ex ut maiores obcaecati, architecto aut perferendis modi doloremque eos repellat! Eveniet sunt ad rem!</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Read