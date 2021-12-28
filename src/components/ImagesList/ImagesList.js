import React, { Component } from 'react';
import firebaseData from '../../firebaseConnect';
import './imagelist.scss';
class ImagesList extends Component {
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
          <div className='col col-xxl-3 imgItem pb-2' key={key}>
            <img src={value.image_src} alt=''></img>
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
        <div className='row'>{this.getData()}</div>
      </div>
    );
  }
}

export default ImagesList;
