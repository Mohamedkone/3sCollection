import Logo from "../assets/3s.svg"
import "../style/Footer.css"
import "../style/Nav.css"



const Footer = () =>{
    return(
        <footer>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav className="bottom-nav">
               <ul> <li>Manga</li>
                <li>Manwha</li>
                <li>Fan Art</li>
                <li>Community</li>
                </ul>
                <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Term Of Use</li>
                </ul>
                <ul>
                <li>Privacy</li>
                <li>Copyrights</li>
                </ul>
            </nav>
            <div className="copyrights">
                <p>&copy; Copyright 2021 Design by Mohamed Kone</p>
            </div>

        </footer>
    )
}

export default Footer