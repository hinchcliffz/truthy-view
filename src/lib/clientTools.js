export default {
  isBrowser: () => {
    /* 
		IsBrowser
		Checks if the Client is a Browser 
		*/
    return this.window === this
  },

  isLocalStorage: () => {
    /* 
		IsLocalStorage
		Checks if Client has Access to Local Storage
		*/
    try {
      if (typeof localStorage === 'object' && navigator.cookieEnabled) return true
      else return false
    } catch (e) {
      return false
    }
  },

  isCookiesEnabled: () => {
    /*
		AreCookiesEnabled
		Checks if Cookies are Enabled
		*/
    try {
      document.cookie = 'cookietest=1'
      var cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1
      document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT'
      return cookiesEnabled
    } catch (e) {
      return false
    }
  },
}
