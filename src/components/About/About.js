import React from 'react';
import './About.css'
import aboutimg from '../../images/niloy1.png'


const About = () => {
    return (
        <div className="about">
            <div>
                <img src={aboutimg} alt="" className="aboutimg" />
            </div>
            <div className="aboutdetails">
                <h2>About me</h2>
                <p>I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!</p>
            </div>

        </div>
    );
};

export default About;