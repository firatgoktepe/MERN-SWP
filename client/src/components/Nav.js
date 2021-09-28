import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <h2>MERN App <span><i>by Firat Goktepe</i></span></h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
