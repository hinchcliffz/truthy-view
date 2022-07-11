import {
  getMacAddressFromAllInterfaces,
  getMacAddressOfMachine,
  validateMacAddress,
} from '../../src/lib/macAddress'
import ipaddr from 'ipaddr.js'

test('Get Mac Address of All Interfaces', async () => {
  const macs = await getMacAddressFromAllInterfaces()
  if (macs.en0) {
    const en0Ipv4 = macs.en0.ipv4
    const en0Mac = macs.en0.mac
    const validIp = ipaddr.isValid(en0Ipv4)
    expect(validIp).toBeTruthy()
    const validMac = validateMacAddress(en0Mac)
    expect(validMac).toBeTruthy()
  }
})

test('Get Mac Address from Machine', async () => {
  const mac = await getMacAddressOfMachine()
  const validMac = await validateMacAddress(mac)
  expect(validMac).toBeTruthy()
})
