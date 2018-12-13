export const API_URL = '/api';

export const getHeaders = {
  headers: {
    'Accept': 'application/json',
  },
  method: 'GET',
};

export const postHeaders = {
  body: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  method: 'POST',
};
