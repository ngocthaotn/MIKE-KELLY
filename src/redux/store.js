import handleImageReducer from './handleImages/handleImageReducer';
import userReducer from './users/userReducer';

var redux = require('redux');

const allReducer = redux.combineReducers({
  user: userReducer,
  handleImage: handleImageReducer,
});

var store = redux.createStore(allReducer);

// store.subscribe(function () {
//   console.log(JSON.stringify(store.getState()));
// });

export default store;
