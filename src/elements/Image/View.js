import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/images/daniele-levis-pelusi-217494.jpg'
import './View.css'

const Image = ({ imageType, imageSrc, imageAlt }) => (
  <img src={imageSrc} alt={imageAlt} className={`image-${imageType}`}/>
);

Image.propTypes = {
  imageType: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};
Image.defaultProps = {
  imageType: 'default',
  imageSrc: defaultImage,
  imageAlt: 'default'
};

export default Image;
