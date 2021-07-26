import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }

    this.changeComponent = this.changeComponent.bind(this)
  }

  changeComponent(e) {
    this.setState({ text: e.target.value })
  }
  render() {


      return (
        <form className='forms'>
            <label className='labels'>
                Aqui vem o 'select'
                <select>
                    <option>Opcao 1</option>
                    <option>Opcao 2</option>
                    <option>Opcao 3</option>
                    <option>Opcao 4</option>
                </select>
            </label>
            <label className='labels'>
                Aqui ficará o primeiro input
                <input type='text' onChange={this.changeComponent}></input>
            </label>
            <label className='labels'>
                segundo input
                <input type='button'></input>
            </label>
            <label className='labels'>
                Finalmente o TextArea
                <textarea></textarea>
            </label>
        </form>
      )
  }
}

export default Form;