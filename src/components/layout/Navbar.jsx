import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = ({auth,profile}) => {
    const links = auth.uid ? <SignedInLink profile={profile} /> : <SignedOutLink />
    return (
        <nav className="nav-wrapper blue darken-3" style={{ padding: '0 60px' }}>
            <Link to="/" className="brand-logo">My Practice</Link>
            {links}
        </nav>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
