import React from 'react';
import Wrap from './Wrap';

export default props => (
  <Wrap>
    <h2>The Button was clicked {props.clicked || '0'} times</h2>
    <button>Click Me</button>
    <p>Demonstrates Redux State in use.</p>
  </Wrap>
);
