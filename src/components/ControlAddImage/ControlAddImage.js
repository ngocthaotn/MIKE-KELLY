import React, { Component } from 'react';

class ControlAddImage extends Component {
  // showButton = () => {
  //   if (this.props.showFormAddImage === true) {
  //     return (
  //       <button
  //         type='button'
  //         className='btn btn-outline-danger'
  //        // onClick={() => this.props.changeStatusForm()}
  //       >
  //         Close
  //       </button>
  //     );
  //   } else {
  //     return (

  //     );
  //   }
  // };
  render() {
    return (
      // <div>
      //   {/* {this.showButton()} */}
      //   <button
      //     type='button'
      //     className='btn btn-outline-secondary'
      //     // onClick={() => this.props.changeStatusForm()}
      //   >
      //     Add image
      //   </button>
      //   <button
      //     type='close'
      //     className='btn btn-outline-danger'
      //     // onClick={() => this.props.changeStatusForm()}
      //   >
      //     Close
      //   </button>
      // </div>
      <div>
        <button
          type='button'
          className='btn btn-primary'
          data-toggle='modal'
          data-target='#exampleModalCenter'
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id='exampleModalCenter'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLongTitle'>
                  Modal title
                </h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>...</div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>
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

export default ControlAddImage;
