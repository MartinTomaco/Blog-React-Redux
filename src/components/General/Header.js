import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <nav id="header">
        <Link to='/'>
            Usuarios
        </Link>
        <Link to='/tareas'>
            Tareas
        </Link>
    </nav>
)

export default Header;