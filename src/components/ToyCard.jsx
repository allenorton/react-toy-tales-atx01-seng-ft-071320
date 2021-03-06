import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = () => {
    this.props.deleteToy(this.props.toy.id)
  }

  handleLike = () => {
    this.props.likeToy(this.props.toy.id, this.props.toy.likes)
  }

  render() {
    let toy = this.props.toy 
    
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
