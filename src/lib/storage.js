const Cookies = require('js-cookie')
const { isBrowser } = require('./clientTools')

const createCookie = async (key, data) => {
  /*
	Create cookie
	Create Item in Cookie Storage with a key and data.
	@param key - The Key to store in session storage
	@param data - The data to store in session storage
	*/
  Cookies.set(key, data)
  return true
}
const getCookie = async (key) => {
  /*
	Get Cookie
	Retrieves an Item based on a key from a cookie.
	@param key - The Key to store in session storage
	@param data - The data to store in session storage
	*/
  const c = Cookies.get(key)
  return c
}

function createLocalStorage(key, data) {
  /*
	Create Local Storage
	Creates an Item in Local Storage with a key and data.
	@param key - The Key to store in session storage
	@param data - The data to store in session storage
	*/
  window.localStorage.setItem(key, data)
  return true
}
function getLocalStorage(key) {
  /*
	Get Local Storage
	Create Item in Session Storage with a key and data.
	@param key - The Key to store in session storage
	@param data - The data to store in session storage
	*/
  return window.localStorage.getItem(key)
}

function createSessionStorage(key, data) {
  /*
	Create Session Storage
	Create Item in Session Storage with a key and data.
	@param key - The Key to store in session storage
	@param data - The data to store in session storage
	*/
  window.sessionStorage.setItem(key, data)
  return true
}

function getSessionStorage(key) {
  /*
	Get Session Storage
	Used to Retrieve a session storage based on a key.
	@param key - The Key of the Session to retrieve
	*/
  return window.sessionStorage.getItem(key)
}

const storeClientData = async (key, dataToStore) => {
  /*
	Store Properly For Client
	Used to Store Properly for whatever client is interacting with the call.
	@param dataToStore - The data to store in the client
	*/
  if (isBrowser()) {
    console.log('Client')
    createLocalStorage(key, dataToStore)
  } else {
    console.log('Server')
    createCookie(key, dataToStore)
  }
}

module.exports = {
  createCookie,
  getCookie,
  createLocalStorage,
  getLocalStorage,
  createSessionStorage,
  getSessionStorage,
  storeClientData,
}
