import React from 'react';
import "./Header.css";
import logo from '../../images/logo.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
    return (
        <>
            <div className="fullHeader">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menus">
                    <p className='scl_link'> <FacebookIcon /> </p>
                    <p className='scl_link'> <LinkedInIcon /> </p>
                    <p className='scl_link'> <GitHubIcon /> </p>
                    <p className='scl_link'> <InstagramIcon /> </p>
                </div>
            </div>
        </>
    )
}

export default Header;