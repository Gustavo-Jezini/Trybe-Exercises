import React from 'react';
import Fieldset1 from './fieldset1';
import Fieldset2 from './fieldset2';
import './App.css';
import Button from './submitButton';

class Form1 extends React.Component {
  
  constructor() {
    super();

    this.handleChange =  this.handleChange.bind(this)

    this.sumbitForms = this.sumbitForms.bind(this)
    
    this.state = {
      nome: '',
      email: '',
      CPF: '',
      endereco: '',
      cidade: '',
      estado: '',
      curriculo: '',
      cargo: '',
      descricao: ''
     }
  }

  sumbitForms() {
    const confirmForm = document.createElement('div');
    const Onde = document.getElementsByTagName('main');
    console.log(Onde);
    confirmForm.innerText = this.state.nome;
    console.log(confirmForm);
  }

  handleChange({ target }) {
    const { name } = target;

    let value = target.type === 'checkbox' ? target.checked : target.value;
    
    //Aqui eu transformo o valor em maiusculo

    if( name === 'nome' ) value = value.toUpperCase();

    if( name === 'endereco') {
        value = value.replace('/[áàãâä]/ui', 'a');
        value = value.replace('/[éèêë]/ui', 'e');
        value = value.replace('/[íìîï]/ui', 'i');
        value = value.replace('/[óòõôö]/ui', 'o');
        value = value.replace('/[úùûü]/ui', 'u');
        value = value.replace('/[ç]/ui', 'c');
        value = value.replace('/[^a-z0-9]/i', '_');
        value = value.replace('/_+/', '_'); 
        return value;
    }

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <Fieldset1 func={this.handleChange}/>
        <Fieldset2 func={this.handleChange}/>
        <Button func={this.sumbitForms}/>
      </div>
    )
  }
}

export default Form1;