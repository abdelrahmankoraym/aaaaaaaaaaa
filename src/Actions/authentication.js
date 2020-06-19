import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDbrpQpf7ey5oxIenWT6tWboDlPWmVVGb8',
    authDomain: 'authooo.firebaseapp.com',
    databaseURL: 'https://authooo.firebaseio.com',
    projectId: 'authooo',
    storageBucket: 'authooo.appspot.com',
    messagingSenderId: '296047178422',
    appId: '1:296047178422:web:436bbf227794845d9f2c17',
    measurementId: 'G-K49LSPN8BF'
  };

export const firebaseApp = firebase.initializeApp(config);