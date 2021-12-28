import React, { Component } from 'react';
import './contact.scss';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      user_email: '',
      subject: '',
      message: '',
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  submitForm = (event) => {
    event.preventDefault(); //ngan chan button load lai trang cua form

    if (
      !this.state.first_name ||
      !this.state.last_name ||
      !this.state.user_email ||
      !this.state.subject ||
      !this.state.message
    ) {
      toast.warn('Please provide value in each input field');
    } else {
      emailjs
        .sendForm('service_gz04qmw', 'template_as7slqj', event.target, 'user_SK39cRin0JOtUTfBmjYeR')
        .then(() => {
          toast.success('Send contact successfully!');
        })
        .catch((err) => toast.error(err));

      event.target.reset();
    }
  };

  render() {
    return (
      <div className='col flex-grow-1 contact'>
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
                onChange={(event) => this.isChange(event)}
              />
              <div id='' className='form-text'>
                First name
              </div>
            </div>
            <div className='col'>
              <input
                type='text'
                className='form-control'
                placeholder=''
                name='last_name'
                onChange={(event) => this.isChange(event)}
              />
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
              onChange={(event) => this.isChange(event)}
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
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-4'>
            <label className='form-label'>Message *</label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              name='message'
              onChange={(event) => this.isChange(event)}
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
