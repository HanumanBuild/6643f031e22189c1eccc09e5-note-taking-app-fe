import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_NOTE_TAKING_APP_BE_URL
});

export default API;