import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png"


function Layout() {
    return (
        <div class="main">
            <div class="navbar">
                <img src={logo} alt="CyberDeck" class="logo" />
                <Link to="/home" class="name" >CyberDeck</Link>
                <ul class="menu cf">
                    <li><Link to="/home">Home</Link></li>
                    <li>
                        <Link to="/home">Store</Link>
                        <ul class="submenu">
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
            <div class="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;