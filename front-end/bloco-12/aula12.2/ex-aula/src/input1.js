import React from 'react';

class Input1 extends React.Component {
  
  render() {

    const { func, valor } = this.props;

    let error = undefined;
    if( valor.length > 10 ) error = 'Nao pode ter mais de 10 letras'

    
    return (
      <label className='labels'>
        Aqui ficará o primeiro input
        <input 
        name='input1' 
        valor={valor}
        type='text' 
        onChange={ func }>
        </input>
  
        <span>{error}</span>
      </label>
    )
}
}

export default Input1;