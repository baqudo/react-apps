import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    
  state = {
      hasError: false
  }

  componentDidCatch() {
      this.setState({
          hasError: true
      })
  }

  render() {
      if (this.state.hasError) {
          return (
              <div className="details card mb-3 p-3 text-danger">Oops, Error! D:</div>
          )
      }
      return this.props.children
  }
}