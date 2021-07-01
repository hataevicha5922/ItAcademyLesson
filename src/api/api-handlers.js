require('firebase/auth');
import firebase from 'firebase/app';
import axios from 'axios';

import { FIREBASE_CONFIG, databaseURL, authUrl } from './api-config.js';
import { response } from 'express';

const headers = { 'Content-Type': 'application/json' };

export const initApi = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
};

export const createPost = (post) => {
  const { userId, name, email, date, title, content } = post;
  return fetch(`${databaseURL}/posts.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      name,
      email,
      date,
      title,
      content,
    }),
  });
};

export const getPosts = () => {
  return fetch(`${databaseURL}/posts.json`, {
    headers,
  })
    .then((response) => response.json())
    .then((result) => {
      const transformedPostsArr = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      return transformedPostsArr;
    });
};

export const signIn = () => {
  return axios
    .post(authUrl, {
      email: 'test1@mail.com',
      password: '111111',
      returnSecureToken: true,
    })
    .then((response) => response)
    .catch((err) => console.log(err));
};

initApi();
// export const createUser = ({ userName, age, creationDate }) => {
//   fetch(`${databaseURL}/users.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       userName,
//       age,
//       creationDate,
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const getUser = () => {
//   fetch(`${databaseURL}/users.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       const transformedUserArr = Object.keys(result).map((key) => ({
//         ...result[key],
//         id: key,
//       }));
//       console.log(transformedUserArr);
//     });
// };

// export const removeUser = () => {
//   fetch(`${databaseURL}/users/-McgVe1iRU56KiUW1GvM.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export const updateUser = () => {
//   fetch(`${databaseURL}/users/-McgXe8O5-7a8N-Rq1nN.json`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       userName: 'Ivan',
//       age: 23,
//       creationDate: 'dsvhbs',
//     }),
//   });
// };
