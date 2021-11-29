import React, { Component } from 'react';
import ImageItem from '../ImageItem/ImageItem';
import data from '../../data.json';
class ImagesList extends Component {
  render() {
    console.log(data);
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <div className='row'>
          <ImageItem imgLink='https://images.squarespace-cdn.com/content/v1/5c0a0a92b27e3986f51e5eb0/1605126351262-B3Y963MWPHSQXP6NP131/_H4A3270.jpg?format=500w'></ImageItem>
          <ImageItem></ImageItem>
          <ImageItem></ImageItem>
        </div>
      </div>
    );
  }
}

export default ImagesList;
