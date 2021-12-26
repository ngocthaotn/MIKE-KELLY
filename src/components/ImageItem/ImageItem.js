import React, { Component } from 'react';

class ImageItem extends Component {
  render() {
    return (
      <div className='col col-xxl-6 mt-4'>
        <div className='imgItem'>
          <img className='img-fluid' src={this.props.imgLink} alt=''></img>
        </div>
      </div>
    );
  }
}

export default ImageItem;
