import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider, database as default};


//   database.ref('expenses').on('value',(snapshot) =>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) =>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
//   })

//   database.ref('expenses').on('child_changed',(snapshot) =>{
//       console.log(snapshot.key ,snapshot.val());
//   })
//   database.ref('expenses').push({
//       description :'Rent',
//       note:'January rent',
//       amount:50.50,
//       createdAt:'01-01-2020'
//   })
//   database.ref('expenses').push({
//     description :'coffee',
//     note:'coffee bill of march',
//     amount:500.50,
//     createdAt:'01-03-2020'
//   })
//   database.ref('expenses').push({
//     description :'furniture',
//     note:'office furniture of year',
//     amount:1000.50,
//     createdAt:'01-07-2020'
//   });


//   database.ref().set({
//       name:'Rasila Hirani',
//       age:34,
//       stressLevel:6,
//       job:{
//         title:'Software Developer',
//         company:'Google'
//       },
//       isSingle:false,
//       location:{
//           city:'Dagenham',
//           country:'United Kingdom'
//       }
//   }).then(() =>{
//       console.log('Data is saved !');
//   }).catch((e) =>{
//         console.log('This is failed !',e)
//   });

//   database.ref().update({
//       stressLevel:9,
//       'job/company' :'Amazon',
//       'location/city':'seattle'
//   }).then(() =>{
//       console.log('Databse update sucessfully');
//   }).catch((e) =>{
//       console.log('Database update failed .',e)
//   })

 