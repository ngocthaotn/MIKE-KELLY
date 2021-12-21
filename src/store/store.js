import firebaseData from '../firebaseConnect';

var redux = require('redux');

const noteInitialState = {
  isEdit: false,
  isAdd: false,
  editItem: {},
};
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      firebaseData.database().ref('dataImage/').push(action.getItem);
      return state;
    case 'CHANGE_ADD_STATUS':
      return { ...state, isAdd: !state.isAdd };
    case 'CHANGE_EDIT_STATUS':
      return { ...state, isEdit: !state.isEdit };
    case 'GET_EDIT_DATA':
      return { ...state, editItem: action.editObject };
    case 'EDIT':
      var updateEditData = firebaseData.database().ref('dataImage/' + action.getItem.id);

      updateEditData.update({
        image_src: action.getItem.image_src,
        title: action.getItem.title,
        date: action.getItem.date,
        descript: action.getItem.descript,
      });
      return { ...state, editItem: {} };
    case 'DELETE':
      firebaseData.database().ref('dataImage/').child(action.deleteId).remove();
      return state;
    default:
      return state;
  }
};

var store = redux.createStore(allReducer);
store.subscribe(function () {
  console.log(JSON.stringify(store.getState()));
});

export default store;
