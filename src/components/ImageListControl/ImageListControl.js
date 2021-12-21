import React, { Component } from 'react';
import ImageItemControl from '../ImageItemControl/ImageItemControl';
import firebaseData from '../../firebaseConnect';

class ImageListControl extends Component {
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
          <ImageItemControl
            key={value.title}
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
    return <div className='row row-cols-1 row-cols-md-3 g-4'>{this.getData()}</div>;
  }
}

export default ImageListControl;
