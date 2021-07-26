import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      index: 0,
    };
  };

  handleClick() {
    if (this.state.index >= (this.props.pokemons.length - 1)) {
      this.setState({
        index: 0,
      });
    }
    else {
      this.setState((state, _props) => ({
        index: state.index + 1,
      }));
    }
  };
    render() {
      let indexPokemon = this.state.index;
        return (
            <div className="pokedex">
              <button onClick={this.handleClick}>Próximo pokemon</button>
                { <Pokemon pokemon={this.props.pokemons[indexPokemon]} /> }                
            </div>
        );
    }
}

export default Pokedex;