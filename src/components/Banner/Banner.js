
import Button from 'react-bootstrap/Button';
import React from 'react';
import profile from '../../images/profile.png'
import './Banners.css'
const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h1>Hello, I'm</h1>
                <br />
                <h1>NILOY CHANDRA MUNSI</h1>
                <br />
                <h3>WEB DEVELOPER</h3>
                <br />
                <Button variant="dark">HIRE ME</Button>{' '}
                <a href="https://drive.google.com/file/d/1OlZZgTTta_lOzENO6rqFTNn7s4UA2o65/view?usp=sharing" target="_blank"><Button variant="info">SEE MY RESUME</Button></a>
            </div>
            <div>
                <img src={profile} alt="" className="hero-img" />
            </div>
        </div>
    );
};

export default Banner;