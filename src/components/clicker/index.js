import React from 'react';
import Wrap from './Wrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';

const Clicker = props => (
  <Wrap>
    <h2>The Button was clicked {props.timesClicked} times</h2>
    <button onClick={props.incrementClicks}>Click Me</button>
    <p>Demonstrates Redux State in use.</p>
  </Wrap>
);

const mapStateToProps = state => ({
  timesClicked: state.click.timesClicked,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clicker);
