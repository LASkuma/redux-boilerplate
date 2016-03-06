import React, { Component, ProptTypes } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.children}
      </div>
    )
  }
}
