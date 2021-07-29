import React from 'react';
import './App.css';

class Fieldset2 extends React.Component {
  render() {

    const { func } = this.props;

    return (
      <fieldset className='field'>
        <legend>Curriculo</legend>
        <label onChange={ func } className='label'>
          Resumo do Curriculo:
          <textarea type='textArea' name='curriculo' required/>
        </label>
        <label onChange={ func } className='label'>
          Cargo: onMouseEnter exibir alerta 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
          <textarea type='textArea' name='cargo' required/>
        </label>
        <label onChange={ func } className='label'>
          Descricao do Cargo:
          <input type='text' name='descricao' required/>
        </label>
      </fieldset>
    )
  }
}

export default Fieldset2