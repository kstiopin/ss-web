import { API_URL, getHeaders, postHeaders } from '../config/config';

import { encodeURIParams } from './helpers';

export const emailLogin = (email, pass) => fetch(`${API_URL}/login.php`, { ...postHeaders, body: encodeURIParams({ email, pass }) }).then(response => response.json());

export const userDetails = (userId) => fetch(`${API_URL}/user_details.php?id=${userId}`, getHeaders).then(response => response.json());

export const userDetailsUpdate = (details) => fetch(`${API_URL}/user_details_update.php`, { ...postHeaders, body: encodeURIParams(details) }).then(response => response.json());
