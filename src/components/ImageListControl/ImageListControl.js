import React, { Component } from 'react';
import ImageItemControl from '../ImageItemControl/ImageItemControl';
import data from '../../data.json';
import AddImage from '../AddImage/AddImage';
import ControlAddImage from '../ControlAddImage/ControlAddImage';

class ImageListControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFormAddImage: false,
      data: data,
    };
  }
  getNewImageData = (image_src, title, date, descript) => {
    var item = {};
    item.id = '';
    item.image_src = image_src;
    item.title = title;
    item.date = date;
    item.descript = descript;

    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items,
    });

    console.log('ket noi ok roi');
    console.log(this.state.data);
  };
  changeStatusForm = () => {
    this.setState({
      showFormAddImage: !this.state.showFormAddImage,
    });
  };
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <h1>Manager</h1>
        <ControlAddImage
          changeStatusForm={() => this.changeStatusForm()}
          showFormAddImage={this.state.showFormAddImage}
        />
        <AddImage
          addImage={(image_src, title, date, descript) =>
            this.getNewImageData(image_src, title, date, descript)
          }
          showFormAddImage={this.state.showFormAddImage}
        />
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {data.map((value, key) => {
            return (
              <ImageItemControl
                key={key}
                imgLink={value.image_src}
                title={value.title}
                date={value.date}
                descript={value.descript}
              ></ImageItemControl>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ImageListControl;
