import React, {Component} from 'react';
import '../styles/App.css';

import ApplicantForm from './ApplicantForm';
import Response from './Response'

class App extends Component {

  constructor(props) {
    super(props)

    // bind functions
    this.fetchData = this.fetchData.bind(this);
    this.makeFetch = this.makeFetch.bind(this);

    this.state = {
      responses: []
    }
  }

  makeFetch = () => {
    fetch('https://brb-foodlogiq-backend.herokuapp.com/api/response').then(results => {
      return results.json();
    }).then(data => {
      this.setState({responses: data.responses});
    })
  }

  componentDidMount() {
    return this.makeFetch()
  }

  fetchData = () => {
    console.log('fetching data');
    return this.makeFetch()
  }

  render() {
    let responseList = null;
    if (this.state.responses) {
      responseList = this.state.responses.map((response) => {
        return (<Response key={response.name} name={response.name} coolProb={response.coolProb} designDesc={response.designDesc} dreamEnv={response.dreamEnv}/>)
      })
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            FoodLogiQ Coding Challenge!
          </h1>
          <p>
            Submit answers to the questions below.</p>
          <ApplicantForm />
        </header>
        <article>
          {responseList}
        </article>
      </div>
    );
  }
}

export default App;
