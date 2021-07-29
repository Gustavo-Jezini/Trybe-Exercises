import React from 'react';
import Input1 from './input1';
import './App.css';
import Options from './options';

class Form extends React.Component {
    constructor() {
      super()

      this.state = {
        input1: '',
        input2: false,
        options: 'Opcao 1',
        text: ''
      }

      this.changeComponent = this.changeComponent.bind(this)
    }

    changeComponent({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ [name]: value })
    }

    render() {


        return (
            <fieldset className='forms'>
              <legend>Formulario Basicao</legend>
                <label className='labels'>
                    Aqui vem o 'select'
                    <Options changeComponent={this.changeComponent} />
                </label>

                <Input1 valor={this.state.input1} func={this.changeComponent} />

                <label className='labels'>
                    segundo input
                    <input name='input2' type='checkbox' onClick={this.changeComponent}></input>
                </label>
                <label className='labels'>
                    Finalmente o TextArea
                    <textarea name='text' onChange={this.changeComponent}></textarea>
                </label>
            </fieldset>
        )
    }
}

export default Form;