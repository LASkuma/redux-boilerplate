import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { startCounter } from './actions';

const redial = {
  defer: ({ dispatch }) => dispatch(startCounter())
}

class CounterPage extends Component {
  render() {
    return (
      <h1>{this.props.count}</h1>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

export default provideHooks(redial)(connect(mapStateToProps)(CounterPage))
