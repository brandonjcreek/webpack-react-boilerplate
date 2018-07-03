import React from 'react';
import PropTypes from 'prop-types';
import Header from '../elements/Header';
import H1 from '../elements/H1';

const HelloWorld = props => (
  <Header>
    <H1 color="#fff" weight="300">
      {props.title}
    </H1>;
  </Header>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
