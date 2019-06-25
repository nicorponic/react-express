import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (

      <div className="App">
        <h1>Welcome!</h1>
        <h2> Current Users:</h2>
        {this.state.users.map(user =>
          <div key={user.id}>{user.firstname} {user.lastname}, {user.email}</div>
        )}
        <LoginForm />
      </div>

    );
  }
}

export default App;