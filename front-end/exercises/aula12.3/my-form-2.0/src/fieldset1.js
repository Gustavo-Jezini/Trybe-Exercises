import React from 'react';
import './App.css';
import Paises from './Paises';

class Fieldset1 extends React.Component {
  render() {
    const { func } = this.props;

    return (
      <fieldset className='field'>
      <legend>Informacoes Pessoais</legend>
      <label onChange={ func } className='label'>
        Nome:
        <input name='nome' type='text' required />
      </label>
      <label onChange={ func } className='label'>
        Email:
        <input name='email' type='email' required/>
      </label>
      <label onChange={ func } className='label'>
        CPF:
        <input name='CPF' type='text' required/>
      </label>
      <label onChange={ func } className='label'>
        Endereço:  REMOVER OS CARACTERES ESPECIAIS
        <input name='endereco' type='text' required />
      </label>
      <label onChange={ func } className='label'>
        Cidade: NAO PODE COMECAR COM NUMEROS
        <input name='cidade' type='text' required/>
      </label>
      <label onChange={ func } className='label'>
        Estado: 
        <Paises />
      </label>
      <label onChange={ func } className='label'>
        Tipo:
        Casa<input type='radio' name='tipo' value='Casa' required/>
        Apartamento<input type='radio' name='tipo' value='Apartamento' required/>
      </label>
    </fieldset>
    )
  }
}

export default Fieldset1;