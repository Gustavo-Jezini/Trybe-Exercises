import React from 'react';

class Options extends React.Component {
  render() {

  const { changeComponent } = this.props;

  return (
    <select 
    name='options' 
    onChange={ changeComponent }
    >
      <option>Opcao 1</option>
      <option>Opcao 2</option>
      <option>Opcao 3</option>
      <option>Opcao 4</option>
    </select>
  )
}
}

export default Options;
