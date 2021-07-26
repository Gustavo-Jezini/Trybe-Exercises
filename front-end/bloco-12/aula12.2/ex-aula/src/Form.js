import React from 'react';
import './App.css';

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
                    <select name='options' onChange={this.changeComponent}>
                        <option>Opcao 1</option>
                        <option>Opcao 2</option>
                        <option>Opcao 3</option>
                        <option>Opcao 4</option>
                    </select>
                </label>
                <label className='labels'>
                    Aqui ficará o primeiro input
                    <input name='input1' type='text' onChange={this.changeComponent}></input>
                </label>
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