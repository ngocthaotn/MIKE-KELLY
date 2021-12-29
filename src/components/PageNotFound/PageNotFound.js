import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
    return (
      <div className='col px-0 flex-grow-1 mt-5'>
        <form className='login mx-auto mt-4 shadow p-3 mb-5 bg-white rounded'>
          <div>
            <h4 className='mt-4 mb-4 text-center'>404 PAGE NOT FOUND {':((('}</h4>
          </div>
        </form>
      </div>
    );
  }
}

export default PageNotFound;
