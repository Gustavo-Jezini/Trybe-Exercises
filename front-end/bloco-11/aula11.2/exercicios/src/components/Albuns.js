// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.alb.image } alt={ this.props.alb.title } />
        <h2>{ this.props.alb.title }</h2>
        <p>{ this.props.alb.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.alb.releaseDate.day }/${ this.props.alb.releaseDate.month }/${ this.props.alb.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.alb.others.recordCompany }</p>
        <p>Formatos: { this.props.alb.others.formats }</p>
      </section>
    );
  }
}

export default Album;