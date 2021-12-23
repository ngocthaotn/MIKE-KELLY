import React, { Component } from 'react';

class ImageItem extends Component {
  render() {
    return (
      <div className='col col-xxl-6 mt-4'>
        <img className='img-fluid img-thumbnail' src={this.props.imgLink} alt=''></img>
      </div>
    );
  }
}

export default ImageItem;
