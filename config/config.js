export const API_URL = 'http://sales.kstiopin.in.ua/api';

// TODO: move headers to api factory
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
