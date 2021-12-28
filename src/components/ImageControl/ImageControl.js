import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddImage from '../AddImage/AddImage';
import ImageListControl from '../ImageListControl/ImageListControl';
import { clearUser } from '../../redux/users/userActions';
import firebaseData from '../../firebaseConnect';
import { FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import './imageControl.scss';
// import history from '../../history';

class ImageControl extends Component {
  showAddView = () => {
    if (this.props.isEdit) {
      return <AddImage />;
    }
  };

  changeAddStatus = () => {
    this.props.setField();
    // this.props.changeAddStatusStore(); //show form add image
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
      <div className='col px-0 flex-grow-1 imgControl'>
        <div className='row mb-2 imgControl-body'>
          <h2 className='col col-xxl-9'>Manager</h2>
          <div className='col col-xxl-3 btn-group groupBtnManager'>
            <button className='btn text-end btn-addImage' onClick={() => this.changeAddStatus()}>
              Add image <FaPlusCircle />
            </button>

            <button className='btn text-end btn-logout' onClick={() => this.handleLogout()}>
              Log out <FaSignOutAlt />
            </button>
          </div>
        </div>
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
    setField: () => {
      dispatch({ type: 'SET_FIELD' });
    },
    clearUser: () => {
      dispatch(clearUser());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageControl);
