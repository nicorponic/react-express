import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstname + ' ' + this.state.lastname );
    event.preventDefault();
  }

  render() {
    return (
      <div className="LoginForm">
        <h1>Login Form</h1>
        <h3>Enter your credentials here:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input name="username" type="text" username={this.state.username} onChange={this.handleInputChange} />
          </label>

          <label>
            First Name:
            <input name="firstname" type="text" firstname={this.state.firstname} onChange={this.handleInputChange} />
          </label>

          <label>
            Last Name:
            <input name="lastname" type="text" lastname={this.state.lastname} onChange={this.handleInputChange} />
          </label>

          <label>
            Email Name:
            <input name="email" type="text" email={this.state.email} onChange={this.handleInputChange} />
          </label>

          <label>
            Password Name:
            <input name="password" type="text" password={this.state.password} onChange={this.handleInputChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <h4>Not a registered user? Register here!</h4>
      </div>
    );
  }
}