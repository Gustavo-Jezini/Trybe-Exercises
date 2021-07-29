import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.state = {
        characters: [],
    };
  }

  async fetchCharacters() {
    const funcFetch = await fetch('https://rickandmortyapi.com/api/character')
    const requestFetch = await funcFetch.json();
    console.log(requestFetch);
    this.setState({characters: requestFetch.results})
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;