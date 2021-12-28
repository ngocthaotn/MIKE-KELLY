import React, { Component } from 'react';
import { toast } from 'react-toastify';
import firebaseData from '../../../firebaseConnect';
import './forgotpassword.scss';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      // errors: [],
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // this.setState({ errors: [] });
    const { email } = this.state;

    firebaseData
      .auth()
      .sendPasswordResetEmail(email)
      .then((email) => {
        console.log(email);
        toast.success('Check your email!!');
      })
      .catch((error) => {
        console.log(this.state.email);
        // var errorCode = error.code;
        var errorMessage = error.message;
        toast.error('Message: ' + errorMessage);
      });
  };

  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <form
          className='forgot-password mx-auto mt-4 shadow p-3 mb-5 bg-white rounded'
          onSubmit={this.handleSubmit}
        >
          <div>
            <h4 className='mt-4 mb-4 text-center'>FORGOT PASSWORD</h4>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Email Address *</label>
            <input
              name='email'
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              required
              value={this.state.email}
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-4 text-center'>
            <button className='btn btn-submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
