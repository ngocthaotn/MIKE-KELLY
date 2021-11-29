import React, { Component } from 'react';

class ImageItemControl extends Component {
  render() {
    return (
      <div className='col'>
        <div className='card h-100'>
          <img src={this.props.imgLink} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{this.props.title}</h5>
            <p className='card-text'>{this.props.date}</p>
            <p className='card-text'>{this.props.descript}</p>
            <button className='btn btn-primary'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageItemControl;
