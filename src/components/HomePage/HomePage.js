import React, { Component } from 'react';
import './homepage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <div
          id='carouselExampleDark'
          className='carousel carousel-dark slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to={0}
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to={1}
              aria-label='Slide 2'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to={2}
              aria-label='Slide 3'
            />
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active '>
              <img
                src='https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1557071844825-DICEAAA510FZSILQ486A/mike-kelley-broad-museum.jpg?format=1000w'
                className='d-block img-fluid mx-auto'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1557071842950-L18HQQZG8DDTDE8S28II/mike-kelley-brickell-interior.jpg'
                className='d-block img-fluid mx-auto'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1608602979923-6PW5561L0G0LZFUA6Z9Q/image-asset.jpeg?format=1000w'
                className='d-block img-fluid mx-auto'
                alt='...'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
