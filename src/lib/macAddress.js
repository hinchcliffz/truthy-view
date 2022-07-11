const macaddress = require('macaddress')

const getMacAddressOfMachine = async () => {
  /*
    Get Mac Address of Machine
    Get the Mac Address of the current Machine
    */
  const mac = await macaddress.one()
  return mac
}

const getMacAddressFromAllInterfaces = async () => {
  /*
    Get Mac Address of all current interfaces
    Get all connected Mac Addresses from Interfaces connected to the machine
    */
  const macs = await macaddress.networkInterfaces()
  return macs
}

const validateMacAddress = (address) => {
  /*
    Validate Mac Address
    Check a Mac Address for Validity
    @param - address - Mac Address to check
    */
  const macAddressRegex = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/
  return macAddressRegex.test(address)
}

module.exports = {
  getMacAddressFromAllInterfaces,
  getMacAddressOfMachine,
  validateMacAddress,
}
