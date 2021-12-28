import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import './addimage.scss';
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

  componentDidMount() {
    if (this.props.editItem) {
      this.setState({
        id: this.props.editItem.id,
        image_src: this.props.editItem.image_src,
        title: this.props.editItem.title,
        date: this.props.editItem.date,
        descript: this.props.editItem.descript,
      });
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  addEditData = (imgURL, title, date, descript, event) => {
    if (!this.state.image_src || !this.state.title || !this.state.date || !this.state.descript) {
      toast.error('Please provide value in each input field!!!');
    } else {
      if (this.state.id) {
        let editObject = {};
        editObject.id = this.state.id;
        editObject.image_src = this.state.image_src;
        editObject.title = this.state.title;
        editObject.date = this.state.date;
        editObject.descript = this.state.descript;

        toast.success('Update data successfully!!!');
        this.props.editDataStore(editObject);
      } else {
        let item = {};
        item.image_src = imgURL;
        item.title = title;
        item.date = date;
        item.descript = descript;

        this.props.addDataStore(item);
        this.props.setField();
        toast.success('Add data successfully!!!');
      }
    }
  };

  render() {
    return (
      <div className='col px-0 flex-grow-1 formAddImage'>
        <form className=''>
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
            className='btn btn-outline-dark mb-2'
            type='button'
            onClick={() =>
              this.addEditData(
                this.state.image_src,
                this.state.title,
                this.state.date,
                this.state.descript
              )
            }
          >
            Save
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ handleImage: { editItem } }) => {
  return {
    editItem: editItem,
  };
  //handleImage là gọi trong store (combineReducers), editItem là phan tu trong state ở file handleImageReducer.js
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({ type: 'ADD_DATA', getItem });
    },
    editDataStore: (getItem) => {
      dispatch({ type: 'EDIT', getItem });
    },
    setField: () => {
      dispatch({ type: 'SET_FIELD' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
