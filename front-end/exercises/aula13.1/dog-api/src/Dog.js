import React from 'react';
import '../src/App.css'

class Dog extends React.Component {
  constructor() {
    super()

    this.fetchAPI = this.fetchAPI.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      dog: '',
      loading: true,
    }
    console.log('constructor');
  }

  async fetchAPI() {
    const fetching = await fetch('https://dog.ceo/api/breeds/image/random')
    const objReturned = await fetching.json();
    this.setState(({
      dog: objReturned.message,
    }))
  }

  componentDidMount() {
    this.fetchAPI();
  }

  saveDog() {
    this.setState(({ }))
  }

  render() {
    const { dog } = this.state;
    return (
      <div>
        <button type='button' onClick={ this.componentDidMount }>Adiciona mais um dog</button>
        <img className='imageDogs' src={ dog } alt='foto de cachorro fofo' />
      </div>
    )
  }
}

export default Dog;