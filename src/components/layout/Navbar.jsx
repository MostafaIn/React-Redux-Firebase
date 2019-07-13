import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLinks';
const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <Link to="/">My Practice</Link>
            <SignedInLink />
            <SignedOutLink />
        </nav>
    )
}

export default Navbar
