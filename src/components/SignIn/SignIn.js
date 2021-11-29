import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <form>
          <div>
            <h3 className='mb-4'>Sign In</h3>
          </div>

          <div className='mb-4'>
            <label className='form-label'>Email Address *</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-4'>
            <label className='form-label'>Password *</label>
            <input
              type='password'
              className='form-control'
              id='inputPassword'
              aria-describedby='passwordHelp'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
