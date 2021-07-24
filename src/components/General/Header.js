import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css'

const Header = (props) => (
    <nav className="header">
        <Link to='/'>
            <button className='headerButtons'>
                 Users
            </button>
        </Link>
        <Link to='/tareas'>
            <button className='headerButtons'>
                Tasks
            </button>
        </Link>
    </nav>
)

export default Header;