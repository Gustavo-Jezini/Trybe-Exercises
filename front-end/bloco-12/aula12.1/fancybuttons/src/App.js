import './App.css';
import React from 'react';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      numeroDeClicks1: 0,
      numeroDeClicks2: 0,
      numeroDeClicks3: 0,
    }

    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);
  }

  button1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks1:  estadoAnterior.numeroDeClicks1 + 1
    }))
  };
  button2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks2: estadoAnterior.numeroDeClicks2 + 1
    }))
  };
  button3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks3: estadoAnterior.numeroDeClicks3 + 1
    }))
  };

  getColor(clicks) {
    return (clicks % 2 === 0) ? 'green' : 'white';
  }

  render() {  
    const { numeroDeClicks1, numeroDeClicks2, numeroDeClicks3 } = this.state;
    return (
      <div>
        <button 
        onClick={this.button1}
        style={{ backgroundColor: this.getColor(numeroDeClicks1) }}
        >
          Botao 1 | { this.state.numeroDeClicks1 }
          </button>
          <button 
        onClick={this.button2}
        style={{ backgroundColor: this.getColor(numeroDeClicks2) }}
        >
          Botao 2 | { this.state.numeroDeClicks2 }
          </button> <button 
        onClick={this.button3}
        style={{ backgroundColor: this.getColor(numeroDeClicks3) }}
        >
          Botao 3 | { this.state.numeroDeClicks3 }
          </button>
      </div>
  );}

}

export default App;
