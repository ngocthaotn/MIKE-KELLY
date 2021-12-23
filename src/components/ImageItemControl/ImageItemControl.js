import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
//import './imageitemcontrol.scss';

class ImageItemControl extends Component {
  getEditData = () => {
    this.props.changeAddStatusStore();

    this.props.getEditDataStore(this.props.note); //lấy nội dung
  };
  deleteData = () => {
    this.props.getDeleteDataStore(this.props.note.id);
    toast.warn('Delete data sucessfully!!');
  };
  render() {
    return (
      <div className='col'>
        <div className='card h-100 item-control' key={this.props.key}>
          <img src={this.props.imgLink} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{this.props.title}</h5>
            <p className='card-text'>{this.props.date}</p>
            <p className='card-text'>{this.props.descript}</p>
            <div className='btn-group'>
              <button className='btn btn-primary' onClick={() => this.getEditData()}>
                Edit
              </button>
              <button className='btn btn-danger' onClick={() => this.deleteData()}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDeleteDataStore: (deleteId) => {
      dispatch({ type: 'DELETE', deleteId });
    },
    changeAddStatusStore: () => {
      dispatch({ type: 'CHANGE_EDIT_STATUS' });
    },
    getEditDataStore: (editObject) => {
      dispatch({ type: 'GET_EDIT_DATA', editObject });
    },
  };
};
export default connect(null, mapDispatchToProps)(ImageItemControl);
