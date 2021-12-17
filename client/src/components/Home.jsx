import React from "react";
import "../style/Home.css"
import Thumbnail from "../assets/kimetsu.jpg"

const Home = () =>{
    return (
        <main>
            <section className="promotion"></section>
            <section className="sec1 updates">
                <h1>Updated ...</h1>
                <div className="container1">
                    <div className="card">
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
                    </div>
                    <div className="card">
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
                    </div>
                    <div className="card">
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
                    </div>
                </div>
            </section>
            <section className="sec2 suggestions">
               
            </section>
            <section className="sec1 ranks"></section>
            <section className="sec2 fanArt"></section>
            <section className="sec1 Manga"></section>
            <section className="sec2 Manhwa"></section>
        </main>
    )
}

export default Home