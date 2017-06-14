import  * as firebase from 'firebase';

const config = {
  
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
