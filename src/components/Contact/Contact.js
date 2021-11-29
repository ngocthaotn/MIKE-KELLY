import React, { Component } from 'react';
import './contact.scss';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';

class Contact extends Component {
  submitForm = (event) => {
    event.preventDefault(); //ngan chan button load lai trang cua form

    emailjs
      .sendForm('service_gz04qmw', 'template_as7slqj', event.target, 'user_SK39cRin0JOtUTfBmjYeR')
      .then((res) => {
        console.log(res);

        this.props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='col flex-grow-1 contact my-auto'>
        <form onSubmit={this.submitForm}>
          <div>
            <h3 className='contact-title mb-4'>Contact</h3>
            <p className='mb-4'>
              For all pricing and booking inquiries , please fill out the form below. Please include
              as much relevant information as possible, for example, the location of the project,
              amount of images needed, intended usage of the images, and timeframe for project
              completion. I look forward to hearing from you.
            </p>
          </div>
          <div className='row mb-4'>
            <label className='form-label'>Name *</label>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                placeholder=''
                aria-label='First name'
                name='first_name'
              />
              <div id='' className='form-text'>
                First name
              </div>
            </div>
            <div className='col'>
              <input type='text' className='form-control' placeholder='' name='last_name' />
              <div id='' className='form-text'>
                Last name
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email Address *
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              name='user_email'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='formGroupExampleInput' className='form-label'>
              Subject *
            </label>
            <input
              type='text'
              className='form-control'
              id='formGroupExampleInput'
              placeholder=''
              name='subject'
            />
          </div>
          <div className='mb-4'>
            <label className='form-label'>Message *</label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              name='message'
            />
          </div>
          <div className='d-grid justify-content-end'>
            <button type='submit' className='btn btn-dark' value='Send'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Contact);
