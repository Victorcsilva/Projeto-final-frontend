import client from '../providers/client'

export const login = (data) => client.post('https://otterwise-fake-api.herokuapp.com/login/authenticate', data)

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
