import React from "react";
import "../style/Home.css"
import Thumbnail from "../assets/kimetsu.jpg"
import Miyazaki from "../assets/miyazaki.jpg"
import Oda from "../assets/oda.jpg"
import Takehiro from "../assets/takehiro.jpg"

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
                <h1>Suggestions</h1>
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
            <section className="sec1 ranks">
                <h1>Weekly Ranking</h1>
            <div className="container2">
                <div className="bubble">
                    <div className="rank rank1">1st</div>
                    <img src={Miyazaki} alt="" />
                    <h2>Miyazaki</h2>
                </div>
                <div className="bubble">
                <div className="rank rank2">2nd</div>
                    <img src={Oda} alt="" />
                    <h2>Eichiro Oda</h2>
                </div>
                <div className="bubble">
                <div className="rank rank3">3rd</div>
                    <img src={Takehiro} alt="" />
                    <h2>Takehiro Inoue</h2>
                </div>

            </div>
            </section>
            <section className="sec2 fanArt">
                <h1>Fan Art</h1>
                <div className="container3">
                    <div className="art-card art1">
                        <img src={Thumbnail} alt="" />
                        <div className="card-info">
                            <h3>Lorem, ipsum.</h3>
                            <h4 className="author">Lorem, ipsum.</h4>
                        </div>
                    </div>
                    <div className="art-card art2">
                        <img src={Thumbnail} alt="" />
                        <div className="card-info">
                            <h3>Lorem, ipsum.</h3>
                            <h4 className="author">Lorem, ipsum.</h4>
                        </div>
                    </div>
                    <div className="art-card art3">
                        <img src={Thumbnail} alt="" />
                        <div className="card-info">
                            <h3>Lorem, ipsum.</h3>
                            <h4 className="author">Lorem, ipsum.</h4>
                        </div>
                    </div>
                    <div className="third">
                    <div className="art-card art4">
                        <img src={Thumbnail} alt="" />
                        <div className="card-info">
                            <h3>Lorem, ipsum.</h3>
                            <h4 className="author">Lorem, ipsum.</h4>
                        </div>
                    </div><div className="art-card art5">
                        <img src={Thumbnail} alt="" />
                        <div className="card-info">
                            <h3>Lorem, ipsum.</h3>
                            <h4 className="author">Lorem, ipsum.</h4>
                        </div>
                    </div>
                    <div className="art-card art6">
                        <img src={Thumbnail} alt="" />
                        <div className="card-info">
                            <h3>Lorem, ipsum.</h3>
                            <h4 className="author">Lorem, ipsum.</h4>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="sec1 Manga"></section>
            <section className="sec2 Manhwa"></section>
        </main>
    )
}

export default Home