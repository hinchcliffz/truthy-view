// Use IP Addr
const axios = require('axios')

const traceIp = async () => {
  /*
    Trace IP
    Trace IP is used to get the users IP Address of the system they are using
    */
  const traceResponse = await axios.get('https://www.cloudflare.com/cdn-cgi/trace')
  const ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  const regexData = traceResponse.data.match(ipRegex)
  const ip = regexData[0]
  return ip
}

module.exports = {
  traceIp,
}
