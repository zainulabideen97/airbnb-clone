import React from 'react';

import heroImage from '../images/banner.png';

function Hero() {
    return (
        <section className="hero--section">
            <div className="hero--image">
                <img src={heroImage} />
            </div>

            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero;
