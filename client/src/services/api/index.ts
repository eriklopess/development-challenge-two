import axios from 'axios';
import dotenv from 'dotenv/config';

const { VITE_API_URL } = import.meta.env;

const instance = axios.create({
  baseURL: `${VITE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
