import { firebaseData } from '../firebaseConnect';

var redux = require('redux');

const noteInitialState = {
  testConnect: 'ket noi state thanh cong',
};
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      firebaseData.database().ref('dataImage/').push(action.getItem);
      return state;
    default:
      return state;
  }
};

var store = redux.createStore(allReducer);
export default store;
