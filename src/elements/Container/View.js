import React from 'react';
import PropTypes from 'prop-types';
import './View.css'

const Container = ({ children, containerType }) => (
  <div className={`container-${containerType}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.object,
  containerType: PropTypes.string,
};
Container.defaultProps = {
  children: {},
  containerType: 'main'
};

export default Container;
