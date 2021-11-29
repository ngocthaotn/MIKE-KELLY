import React, { Component } from 'react';

class ImageItem extends Component {
  render() {
    return (
      <div className='col col-xxl-4 mt-4'>
        <img className='img-fluid' src={this.props.imgLink} alt=''></img>
      </div>
    );
  }
}

export default ImageItem;
