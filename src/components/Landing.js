import React from 'react';
import './Landing.css';
import Nav from './Nav';

const Landing = () => (
  <section className="landing">
    <Nav />
    <section className="selling-points">
      <h1 className="point-title">Choose Your Music</h1>
    </section>
    <section className="point-description">
      <p>The world is full of music! why should you have to listen to music that someone else chose?</p>
    </section>
    <section className="go-to-album">
      <div class="circle">Go to Album</div>
    </section>
  </section>
);

export default Landing;