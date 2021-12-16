import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    this.setState({ [name]: value });
  };

  addData = (imgURL, title, date, descript) => {
    if (!this.state.image_src || !this.state.title || !this.state.date || !this.state.descript) {
      alert('Please provide value in each input field');
    } else {
      var item = {};
      item.image_src = imgURL;
      item.title = title;
      item.date = date;
      item.descript = descript;

      this.props.addDataStore(item);
    }
  };

  render() {
    return (
      <div className='col px-0 flex-grow-1 '>
        <div>
          {/* Button trigger modal */}
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Add Image
          </button>
          {/* Modal */}
          <div
            className='modal fade'
            id='exampleModal'
            tabIndex={-1}
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    ADD IMAGE FORM
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  />
                </div>
                <div className='modal-body'>
                  <form>
                    <div className='mb-3'>
                      <label className='form-label'>Link image *</label>
                      <input
                        name='image_src'
                        className='form-control'
                        type='text'
                        aria-label='default input example'
                        onChange={(event) => this.isChange(event)}
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Title *</label>
                      <input
                        name='title'
                        className='form-control'
                        type='text'
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
                  </form>
                </div>
                <div className='modal-footer'>
                  <div
                    className='btn btn-outline-warning '
                    type='button'
                    onClick={() =>
                      this.addData(
                        this.state.image_src,
                        this.state.title,
                        this.state.date,
                        this.state.descript
                      )
                    }
                  >
                    Add
                  </div>
                  <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testConnect,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({ type: 'ADD_DATA', getItem });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
