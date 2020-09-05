import React, { Component } from 'react';

export default class ErrorBtn extends Component {
  state = {
    renderError: false
  }

  render() {
    console.log('render error btn');
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button type="button" className="btn btn-danger" onClick={() => this.setState({renderError: true})}>Throw Error! :D</button>
    )
  }
}