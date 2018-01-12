import { API_URL, getHeaders, postHeaders } from '../config/config';

import { encodeURIParams } from './helpers';

/**
 * Login request using user's email
 * @param email {string}
 * @param pass {string}
 * @return user {object} user data from table `users`
 */
export const emailLogin = (email, pass) => fetch(`${API_URL}/login.php`, { ...postHeaders, body: encodeURIParams({ email, pass }) }).then(response => response.json());

/**
 * User details request by id
 * @param userId {int}
 * @return details {object} user details from table `user_details`
 */
export const userDetails = (userId) => fetch(`${API_URL}/user_details.php?id=${userId}`, getHeaders).then(response => response.json());

/**
 * Update user details (using id stored on server for current user)
 * @param details {object} user details according to `user_details` table schema
 * @return success {boolean} whether or not the update was successful
 */
export const userDetailsUpdate = (details) => fetch(`${API_URL}/user_details_update.php`, { ...postHeaders, body: encodeURIParams(details) }).then(response => response.json());
