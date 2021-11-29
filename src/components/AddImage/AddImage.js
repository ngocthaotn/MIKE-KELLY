import React, { Component } from 'react';

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      image_src: '',
      title: '',
      date: '',
      descript: '',
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log('name: ' + name);
    // console.log('value: ' + value);

    this.setState({ [name]: value });

    //dong goi phan tu
    // var item = {};
    // item.id = this.state.id;
    // item.image_src = this.state.image_src;
    // item.title = this.state.title;
    // item.date = this.state.date;
    // item.descript = this.state.descript;
    // console.log(item);
  };
  checkStatusForm = () => {
    if (this.props.showFormAddImage === true) {
      return (
        <form>
          <div>
            <h3 className='mb-3'>Add Images</h3>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Choose image *</label>
            <input
              className='form-control'
              type='file'
              id='formFile'
              name='image_src'
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Title *</label>
            <input
              name='title'
              className='form-control'
              type='text'
              placeholder='Default input'
              aria-label='default input example'
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Date *</label>
            <input
              name='date'
              className='form-control'
              type='text'
              placeholder='Default input'
              aria-label='default input example'
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Description *
            </label>
            <textarea
              name='descript'
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={3}
              defaultValue={''}
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-3'>
            <div
              className='btn btn-outline-warning '
              onClick={(image_src, title, date, descript) =>
                this.props.addImage(
                  this.state.image_src,
                  this.state.title,
                  this.state.date,
                  this.state.descript
                )
              }
            >
              Add
            </div>
          </div>
        </form>
      );
    }
  };
  render() {
    return <div className='col px-0 flex-grow-1 '>{this.checkStatusForm()}</div>;
  }
}

export default AddImage;
