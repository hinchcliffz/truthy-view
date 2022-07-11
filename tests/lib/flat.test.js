import faker from '@faker-js/faker'
import encrpytion from '../../src/lib/encryption'
import flat from '../../src/lib/flat'

const ip = faker.internet.ip()
test('Flatten Encryption', async () => {
  const encrypted = await encrpytion.encrypt(ip)
  const flattened = await flat.flatten(encrypted)
  const f = encrypted.iv + '_' + encrypted.content
  expect(flattened).toEqual(f)
  try {
    await flat.flatten(1234)
  } catch (err) {
    expect(err.message).toBe('Must Flatten an Encrypted Hash Object')
  }
})

test('Unflatten Encryption', async () => {
  // Get IP From Trace Function
  const encrypted = await encrpytion.encrypt(ip)
  const flattened = await flat.flatten(encrypted)
  const unflat = await flat.unflatten(flattened)
  expect(unflat).toBeInstanceOf(Object)

  const f = encrypted.iv + '_' + encrypted.content
  expect(flattened).toEqual(f)
  try {
    await flat.unflatten(1234)
  } catch (err) {
    expect(err.message).toBe('flat.split is not a function')
  }
  try {
    await flat.unflatten('1234')
  } catch (err) {
    expect(err.message).toBe('You need to pass in a flattened encryption object.')
  }
})
