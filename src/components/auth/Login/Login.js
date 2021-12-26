import React, { Component } from 'react';
import './login.scss';
import firebaseData from '../../../firebaseConnect';
import { Link, withRouter } from 'react-router-dom';
import ImageControl from '../../ImageControl/ImageControl';
import { toast } from 'react-toastify';
import { createBrowserHistory } from 'history';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: [],
      view: false,
    };
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  changeView = () => {
    this.setState({ view: true });
    if (this.state.view) {
      return <ImageControl />;
    }
  };

  isFormValid = () => this.state.email && this.state.password;

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      this.setState({ errors: [] });
      const { email, password, errors } = this.state;

      firebaseData
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((signedInUser) => {
          console.log('dang nhap thanh cong' + signedInUser);

          const history = createBrowserHistory({ forceRefresh: true });
          history.push('/image-control');
        })
        .catch((err) => {
          toast.error('Email or password is empty!!!');
          this.setState({ errors: [...errors, err] });
        });
    } else {
      toast.warn('Please provide value in each input field!!!');
    }
  };

  formReset = () => {
    const history = createBrowserHistory();
    history.push('/forgot-password');
  };

  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <form
          className='login mx-auto mt-4 shadow p-3 mb-5 bg-white rounded'
          onSubmit={this.handleSubmit}
        >
          <div>
            <h4 className='mt-4 mb-4 text-center'>LOGIN</h4>
          </div>
          <div className='mb-4'>
            <label className='form-label'>Email Address *</label>
            <input
              name='email'
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              value={this.state.email}
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-4'>
            <label className='form-label'>Password *</label>
            <input
              name='password'
              type='password'
              className='form-control'
              id='inputPassword'
              aria-describedby='passwordHelp'
              value={this.state.password}
              onChange={(event) => this.isChange(event)}
            />
          </div>
          <div className='mb-4 text-center'>
            {/* <Link to='/forgot-password' onClick={() => this.formReset()}>
              Forgot password?
            </Link> */}
          </div>
          <div className='mb-4 text-center'>
            <button className='btn btn-dark'>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
