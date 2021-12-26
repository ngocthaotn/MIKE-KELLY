import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddImage from '../AddImage/AddImage';
import ImageListControl from '../ImageListControl/ImageListControl';
import { clearUser } from '../../redux/users/userActions';
import firebaseData from '../../firebaseConnect';
class ImageControl extends Component {
  showAddView = () => {
    if (this.props.isEdit) {
      return <AddImage />;
    }
  };

  changeAddStatus = () => {
    this.props.setField();
    this.props.changeAddStatusStore(); //show form add image
    // this.props.changeAddTitleStore(); // change title add image
  };
  handleLogout = () => {
    firebaseData
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser();
      });
  };
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <h1 className='text-center'>Manager</h1>
        <button className='btn btn-secondary' onClick={() => this.changeAddStatus()}>
          Add Image
        </button>
        <button className='btn btn-secondary' onClick={() => this.handleLogout()}>
          Log out
        </button>
        {this.showAddView()}
        <ImageListControl />
      </div>
    );
  }
}
const mapStateToProps = ({ handleImage: { isEdit } }) => {
  return {
    isEdit: isEdit,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeAddStatusStore: () => {
      dispatch({ type: 'CHANGE_EDIT_STATUS' });
    },
    // changeAddTitleStore: () => {
    //   dispatch({ type: 'CHANGE_ADD_STATUS' });
    // },
    setField: () => {
      dispatch({ type: 'SET_FIELD' });
    },
    clearUser: () => {
      dispatch(clearUser());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageControl);
