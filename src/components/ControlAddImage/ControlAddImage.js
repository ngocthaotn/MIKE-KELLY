import React, { Component } from 'react';

class ControlAddImage extends Component {
  showButton = () => {
    if (this.props.showFormAddImage === true) {
      return (
        <button
          type='button'
          className='btn btn-outline-danger'
          onClick={() => this.props.changeStatusForm()}
        >
          Close
        </button>
      );
    } else {
      return (
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => this.props.changeStatusForm()}
        >
          Add image
        </button>
      );
    }
  };
  render() {
    return <div>{this.showButton()}</div>;
  }
}

export default ControlAddImage;
