import React, { Component } from 'react';
import '../styles/App.css';

import ApplicantForm from './ApplicantForm';
import applicantResponse from './Response'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> FoodLogiQ Coding Challenge! </h1>
          <p> Submit answers to the questions below.</p>
          <ApplicantForm />
        </header>
        <article>

        </article>
      </div>
    );
  }
}

export default App;
