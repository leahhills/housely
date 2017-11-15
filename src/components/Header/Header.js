import React, { Component } from 'react';
import houser_logo from './../../houser_logo_small.png';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='header-bar'>
                <div className='header-bar-content'>
                    <div className='header-bar-left-container'>
                        <img src={houser_logo} alt="header house logo"/>
                        <span className='header-title'>
                            <strong>Houser</strong> Dashboard
                        </span>
                    </div>
                    <div className='header-bar-right-container'>
                        <Link to="/" style={{ textDecoration: 'none' }}>   
                            <span className='header-logout'>Logout</span>
                        </Link> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;