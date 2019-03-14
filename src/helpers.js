export function validateEmail(email) {
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}

export function encodeURIParams(obj) {
  const params = [];
  Object.keys(obj).forEach(key => {
    const value = (obj[key] && (obj[key] !== 'null') && (obj[key].length > 0)) ? obj[key] : '';
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });

  return params.join('&');
}
