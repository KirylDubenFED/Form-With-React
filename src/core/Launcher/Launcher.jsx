import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const Launcher = ({ children }) => (
  <Router>
    { children }
  </Router>
);

Launcher.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, PropTypes.arrayOf(PropTypes.element),
  ]),
};

Launcher.defaultProps = {
  children: null,
};

export default Launcher;
