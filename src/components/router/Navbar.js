import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <div>Logo</div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;
