import React, { Component } from 'react';

import '../styles/form.css'

class ApplicantForm extends Component {

  constructor(props) {
    super(props);

    // bind action handlers
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: "",
      coolProb: "",
      designDesc: "",
      dreamEnv: "",
      submitMsg: ""
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = (e) => {
    e.preventDefault();
    let formData = {
      name: this.state.name,
      coolProb: this.state.coolProb,
      designDesc: this.state.designDesc,
      dreamEnv: this.state.dreamEnv
    }
    let formJSON = JSON.stringify(formData);

    fetch("https://brb-foodlogiq-backend.herokuapp.com/api/answer", {
      method: "POST",
      body: formJSON,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      this.setState({
        submitMsg: "Submission Successful!",
        name: "",
        coolProb: "",
        designDesc: "",
        dreamEnv: ""
      })
      console.log("success", response);

    }).catch(err => {
      this.setState({
        submitMsg: "Submission Failed",
        name: "",
        coolProb: "",
        designDesc: "",
        dreamEnv: ""
      })
      console.log("failure", err);
    });
  }

  render () {
    return (
      <form className="applicantForm" onSubmit={this.submit}>
        <label className="label" htmlFor="name">Who are you?</label>
        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Please enter your name" />

        <label className="label" htmlFor="coolProb">What's the coolest problem you've solved that's applicable to the role you'd like to have with FoodLogiQ?  Why should we think it's cool, too? </label>
        <textarea name="coolProb" id="coolProb" value={this.state.coolProb} onChange={this.handleChange} rows="3" cols="40" />

        <label className="label" htmlFor="designDesc">What design and development assumptions/decisions went into your solution from the first question?</label>
        <textarea name="designDesc" id="designDesc" value={this.state.designDesc} onChange={this.handleChange} rows="3" cols="40" />

        <label className="label" htmlFor="dreamEnv">Describe the environment that would exist at your dream job. The culture, people, office, tools, ect. - whatever details you think would make it awesome.  Don't worry about trying to describe us so we think you think that we're your dream employer.  We want to know about you!</label>
        <textarea name="dreamEnv" id="dreamEnv" value={this.state.dreamEnv} onChange={this.handleChange} rows="3" cols="40" />

        <button type="submit" name="submit">Submit</button>

        <h3>{this.state.submitMsg}</h3>
      </form>
    )
  }
}

export default ApplicantForm;
