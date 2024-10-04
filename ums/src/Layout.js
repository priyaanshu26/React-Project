import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png"


function Layout() {
    return (
        <div className="main">
            <div className="navbar">
                <img src={logo} alt="CyberDeck" className="logo" />
                <Link to="/home" className="name" >CyberDeck</Link>
                <ul className="menu cf">
                    <li><Link to="/home">Home</Link></li>
                    <li>
                        <Link to="/home">Store</Link>
                        <ul className="submenu">
                            <li><Link to="/discover">Discover New</Link></li>
                            <li><Link to="/wishlist">Wishlist</Link></li>
                            <li><Link to="/community">Community</Link></li>
                            <li><Link to="/news">News</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Support</Link></li>
                </ul>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;