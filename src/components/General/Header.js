import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css'

const Header = (props) => (
    <nav className="header">
        <Link to='/'>
            Usuarios
        </Link>
        <Link to='/tareas'>
            Tareas
        </Link>
    </nav>
)

export default Header;