import React, { Component } from 'react';

import '../styles/form.css'

class Form extends Component {

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
        submitMsg: "Submission Successful!"
      })
      console.log("success", response);

    }).catch(err => {
      this.setState({
        submitMsg: "Submission Failed"
      })
      console.log("failure", err);
    });
    this.setState({
      name: "",
      coolProb: "",
      designDesc: "",
      dreamEnv: ""
    });
  }

}

export default Form;
