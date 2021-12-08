  // App.js
import React, { Component } from 'react';
  import './App.css';
import ValidEmail from './Valid';
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        saveEmail: '',
        waitingEmail: true,
      };
    }
  
    changeEmail(value) {
      this.setState({ email: value });
    }
  
    changeSaveEmail(value) {
      this.setState({ saveEmail: value, email: '', waitingEmail: false });
    }
  
    render() {
      const { email, saveEmail, waitingEmail } = this.state;
      return (
        <div className="App">
          <label htmlFor="id-email">
            Email
          </label>
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
          <input
            id="btn-enviar"
            type="button"
            data-testid="id-send"
            value="Enviar"
            onClick={() => this.changeSaveEmail(email)}
          />
          <input id="btn-id" type="button" value="Voltar" />
          {waitingEmail ? null : <ValidEmail email={saveEmail}/>}
        </div>
      );
    }
  }
  
  export default App;