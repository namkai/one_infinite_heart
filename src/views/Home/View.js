import React from 'react';
import PropTypes from 'prop-types';
import backgroundImage from '../../assets/images/brandon-morgan-15365.jpg';
import { Parallax } from '../../elements';
import './View.css'

function Home() {
  return (
    <div className="home-container">
      <Parallax  />
      <div className="text-container">
        <p className="intro-text">This site presents the work of Peter Fairfield and the Tara Center for Health and
          Happiness.
          The basis of all of our work is connecting pure awareness, an East/West model of personality and
          transformation with a deep spiritual commitment to humanity and our world
          Our work is in several areas: Clinically with individuals and
          presenting seminar/retreats for therapeutic professionals, corporations and the lay public</p>
      </div>
      <Parallax/>
    </div>
  );
}

export default Home;
