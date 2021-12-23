import React, { Component } from 'react';
import ImageItem from '../ImageItem/ImageItem';
import firebaseData from '../../firebaseConnect';

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
          <ImageItem
            key={key}
            note={value}
            imgLink={value.image_src}
            title={value.title}
            date={value.date}
            descript={value.descript}
          />
        );
      });
    }
  };
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <div className='row'>{this.getData()}</div>
      </div>
    );
  }
}

export default ImagesList;
