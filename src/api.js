import { API_URL, fetchHeaders } from '../config/config';

export const emailLogin = (email, pass) => fetch(`${API_URL}/login.php`, {
  body: `email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  method: 'POST',
}).then(response => response.json());
