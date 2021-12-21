import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditImage extends Component {
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
  // static getDerivedStateFromProps(props, state) {
  //   if (props.editItem.id) {
  //     return {
  //       id: props.editItem.id,
  //       image_src: props.editItem.image_src,
  //       title: props.editItem.title,
  //       date: props.editItem.date,
  //       descript: props.editItem.descript,
  //     };
  //   }
  //   return null;
  // }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  getEditData = () => {
    // this.props.getEditDataStore(this.props.note);
  };

  editData = () => {
    if (this.state.id) {
      var editObject = {};
      editObject.id = this.state.id;
      editObject.image_src = this.state.image_src;
      editObject.title = this.state.title;
      editObject.date = this.state.date;
      editObject.descript = this.state.descript;

      alert('Update data successfully!!!');
      this.props.editDataStore(editObject);
    }
  };

  render() {
    return (
      <div className='col px-0 flex-grow-1 '>
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
                  Modal title
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
                      defaultValue={this.props.editItem.image_src}
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
                      defaultValue={this.props.editItem.title}
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
                      defaultValue={this.props.editItem.date}
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
                      defaultValue={this.props.editItem.descript}
                      onChange={(event) => this.isChange(event)}
                    />
                  </div>
                  <div
                    className='btn btn-outline-warning '
                    type='button'
                    onClick={() => this.editData()}
                  >
                    Save
                  </div>
                </form>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save changes
                </button>
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
    editItem: state.editItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editDataStore: (getItem) => {
      dispatch({ type: 'EDIT', getItem });
    },
    getEditDataStore: (editObject) => {
      dispatch({ type: 'GET_EDIT_DATA', editObject });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditImage);
