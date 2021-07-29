import React from 'react';
import './App.css';

class Button extends React.Component {

  render() {
    const { func } = this.props;
    return (
      <button onClick={ func } type='submit'>Enviar Respostas</button>
    )
  }
}

export default Button;