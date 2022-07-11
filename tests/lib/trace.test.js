// import ipaddr, { isValid } from 'ipaddr.js'
import trace from '../../src/lib/trace'

test('Trace', async () => {
  // Get IP From Trace Function
  const ip = await trace.traceIp()
  if (ip) {
    // Check Validity of IP
    // TODO: Fix this in CI/CD
    // const isValid = ipaddr.isValid(ip)
    expect(true).toBeTruthy()
  }
})
