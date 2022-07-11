import { faker } from '@faker-js/faker'
import encrpytion from '../../src/lib/encryption'
let encrypted
let ip
test('Encrypt Data', async () => {
  ip = faker.internet.ip()

  encrypted = encrpytion.encrypt(ip)
  expect(encrypted).toBeInstanceOf(Object)

  try {
    encrpytion.encrypt(22)
    expect(22).toThrow(TypeError)
  } catch (err) {
    expect(err.message).toBe(
      'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (22)',
    )
  }
})
test('Decrypt Data', async () => {
  const decrypted = encrpytion.decrypt(encrypted)
  expect(decrypted).toEqual(ip)

  try {
    encrpytion.decrypt(22).toThrow(TypeError)
  } catch (err) {
    expect(err.message).toBe(
      'The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined',
    )
  }
})
