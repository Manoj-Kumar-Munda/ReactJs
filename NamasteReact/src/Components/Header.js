import { useState } from "react";
import { Link } from "react-router-dom";

function loggedInUser(){
    return true;
}
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={require ("../../food-logo.png")} />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to ="/">Home </Link></li>
                    <li>
                        <Link to = "/about" > About Us </Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>

            </div>
            { loggedIn ?(<button onClick={ () => setLoggedIn(false)}>Logout</button>):(<button onClick={ () => setLoggedIn(true)}>Login</button>)}
        </div>
        
    )
};

export default Header;