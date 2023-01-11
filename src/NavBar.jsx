import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className="navbar">

            <Link to={props.home} className="link"> Home</Link>
            <Link to={props.about} className="link">About</Link>
            
            <h1>Ojo Oladayo's Repo Overview</h1>
            <img src={props.img} alt="Profile pic" className="profile-Pic"/>
        </nav>
    )
}