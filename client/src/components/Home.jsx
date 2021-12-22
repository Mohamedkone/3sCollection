import React, {useEffect, useState} from "react";
import axios from "axios";
import "../style/Home.css"
import Thumbnail from "../assets/kimetsu.jpg"
import Miyazaki from "../assets/miyazaki.jpg"
import Oda from "../assets/oda.jpg"
import Takehiro from "../assets/takehiro.jpg"
import { Link } from "react-router-dom";

const Home = () =>{

    const [Chapters, SetChapter] = useState("")
    const [Info, SetInfo] = useState()
    const [nbrChp, SetNbrChp] = useState()
    const [nbrMng, SetNbrMng] = useState()
    const [nbrArt, SetNbrArt] = useState()

        useEffect(()=>{
        axios.get('http://localhost:3001/').then(res =>{
          SetInfo(res.data)
          SetNbrChp(3)
          SetNbrMng(6)
          SetNbrArt(6)
        })
    },[])
    
    let boxCard = []
    for(let i = 0; i<nbrChp; i++){
        boxCard.push(<div key={i-1} className="card">
        <img src={Thumbnail} alt="" />
        <div className="card-info">
            <h3>{Info[2][i].title}</h3>
            <h4 className="author series">Chapter {Info[2][i].chp_nb}</h4>
        </div>
    </div>)
    }

    let boxCard2 = []
    for(let i = 0; i<nbrMng; i++){
        boxCard2.push(<div  className="manga-card"><Link to={"/Read"} key={i-1}>
        <img src={require(`../${Info[1][i].thumbnail}`)} alt="" key={i}/>
        <div className="card-info">
        <h3>{Info[1][i].name}</h3>
        <h4 className="author">{Info[1][i].creator}</h4>
        <p className="card-desc">{Info[1][i].synopsis}
        </p>
    </div>
    </Link>

</div>)
    }

    let boxCard3 = []
    let j = 0
    for(let i = 2; i<nbrArt+2; i++){
        boxCard3.push(<div key={i-1} className={`art-card art${j+1}`}>
        <img src={require(`../${Info[0][i].path}`)} alt="" />
        <div className="card-info">
            <h3>{Info[0][i].title}</h3>
            <h4 className="author">{Info[0][i].creator}</h4>
        </div>
    </div>)
    j++
    }
    let boxCard4 = []
    for(let i = 0; i<nbrMng; i++){
        boxCard4.push(<div  className="manga-card"><Link to={"/Read"} key={i-1}>
        <img src={require(`../${Info[1][i].thumbnail}`)} alt="" key={i}/>
        <div className="card-info">
        <h3>{Info[1][i].name}</h3>
        <h4 className="author">{Info[1][i].creator}</h4>
        <p className="card-desc">{Info[1][i].synopsis}
        </p>
    </div>
    </Link>

</div>)
    }

    return (
        <main>
            <section className="promotion"></section>
            <section className="sec1 updates">
                <h1>Recent Updates...</h1>
                <div className="container1">
                    {boxCard}
                </div>
            </section>
            <section className="sec2 suggestions">
                <h1>Suggestions</h1>
                <div className="container1 suggest">
                    {boxCard2}
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
                    {boxCard3}
                </div>
            </section>
            <section className="sec1 Manga"><h1>Manga Suggestions</h1>
                <div className="container4">
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
            <section className="sec2 Manhwa"><h1>Manhwa Suggestions</h1>
                <div className="container4">
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
                    <div className="manga-card">
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
        </main>
    )
}

export default Home