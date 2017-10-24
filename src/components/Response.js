import React, { Component } from 'react';

import '../styles/response.css'

class Response extends Component {
  render() {
    return (
      <div className="response">
        <p><span className="title">Name:</span> {this.props.name}</p>
        <p><span className="title">Cool Problem:</span> {this.props.coolProb}</p>
        <p><span className="title">Design Decisions:</span> {this.props.designDesc}</p>
        <p><span className="title">Dream Environment:</span> {this.props.dreamEnv}</p>
      </div>
    )
  }
}

export default Response;
