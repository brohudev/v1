import React from 'react';
import './about.css'; // Import component-specific CSS
//basic about me section. to be improved with a lot more later down the line when I'm done with bigger problems
const About = () => {
    
    return (
        <section id="about" class="about-container">
            <img src="/hitarth.png" alt="Hitarth" className="home-image" />
            <header className="header">
                <h1>Hitarth Thanki (aka "brohudev")</h1>
                <h2>Debugging life, one keystroke at a time</h2>
            </header>
            <p>Hiya! 👋🏽</p>
            <p> I’m a Computer Science major at the University of Houston. I love Software-Engineering, Cryptography, and Cybersecurity, and I love discussing tech, cars, planes, rockets, cool science topics and everything in between!</p>
            <p>I lead CodeRed at CougarCS, organizing Houston’s largest hackathon, and am part of the CougarCS Infosec CTF Team, focusing on cybersecurity challenges and workshops. I am also the Software Team Lead for Ungerdraguate Student Instrumentation Project VI (USIP VI), where we build and test balloon-borne experiments. </p>
        </section>
    );
};

export default About;