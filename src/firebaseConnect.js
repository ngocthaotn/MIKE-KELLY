import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDlEWg2H9hC_s8cQT4yuOYsq8kGqN0hLWs',
  authDomain: 'mike-kelly.firebaseapp.com',
  databaseURL: 'https://mike-kelly-default-rtdb.firebaseio.com',
  projectId: 'mike-kelly',
  storageBucket: 'mike-kelly.appspot.com',
  messagingSenderId: '874386038896',
  appId: '1:874386038896:web:8536ad87319ff0abb7d4b5',
};

const firebaseData = firebase.initializeApp(firebaseConfig);
export default firebaseData;

// lấy dữ liệu
//ref -> bảng dữ liệu
//snapshot -> ảnh dữ liệu
