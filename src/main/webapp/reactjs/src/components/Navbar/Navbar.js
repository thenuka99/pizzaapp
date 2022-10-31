import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
            <div class="wrapper">
                <ul>
                    <li><a href="#">Pizza</a></li>
                    <li><a href="#">Employee</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;