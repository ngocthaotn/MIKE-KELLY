import React, { Component } from 'react';
import './homepage.scss';
import firebaseData from '../../firebaseConnect';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFirebase: [],
    };
  }
  componentDidMount() {
    const data = firebaseData.database().ref().child('dataImage');
    data.on('value', (items) => {
      const arrayData = [];
      items.forEach((element) => {
        const key = element.key;
        const image_src = element.val().image_src;
        const title = element.val().title;
        const date = element.val().date;
        const descript = element.val().descript;

        arrayData.push({
          id: key,
          image_src: image_src,
          title: title,
          date: date,
          descript: descript,
        });
      });

      this.setState({
        dataFirebase: arrayData,
      });
    });
  }

  getData = () => {
    if (this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) => {
        return (
          <div className='carousel-item' key={key}>
            <img src={value.image_src} className='d-block img-fluid mx-auto' alt='...' />
          </div>
        );
      });
    }
  };
  componentWillUnmount() {
    this.setState({
      dataFirebase: [],
    });
  }
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <div
          id='carouselExampleDark'
          className='carousel carousel-dark slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg'
                className='d-block img-fluid mx-auto'
                alt='...'
              />
            </div>
            {this.getData()}
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
