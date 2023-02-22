import React from 'react';
import './Profile.css';

import myphoto from '../images/my.jpg';
import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
    <>
    <div className="fullProfile">
        
        <div className="my_photo">
            <img src={myphoto} alt="My profile" />
        </div>
        <p className='name'>akash khan</p>
        <p className='title'>front-end developer</p>
        <div className="menu">
            <ul>
                <li>
                <Link exact to="/" id='active'><InfoIcon id="profile_icon"/>About</Link>
                </li>

                <li>
                <Link exact to="/service" id='active'><VolunteerActivismIcon id="profile_icon"/>Service</Link>
                </li>

                <li>
                <Link exact to="/review" id='active'><ReviewsIcon id="profile_icon"/>Review</Link>
                </li>

                <li>
                <Link exact to="/contact" id='active'><ContactMailIcon id="profile_icon"/>Contact</Link>
                </li>
            </ul>
        </div>
        </div>
    </>
    )
}

export default Profile;