import React from 'react';
import PropTypes from 'prop-types';
import './View.css'

const Parallax = ({ backgroundImage }) => {
  return (
    <div className="parallax" style={{backgroundImage}} />
  );
};

Parallax.propTypes = {};
Parallax.defaultProps = {};

export default Parallax;
