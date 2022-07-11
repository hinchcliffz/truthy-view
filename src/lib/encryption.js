const crypto = require('crypto')
const Buffer = require('buffer').Buffer
const defaults = require('../config/defaults.json')

const iv = crypto.randomBytes(defaults.encryptionRandomBytes)
const defaultAlgo = defaults.encryptionAlgorithm
const defaultEncryptionKey = defaults.encryptionKey

module.exports = {
  encrypt: (text, algo = defaultAlgo, secret = defaultEncryptionKey) => {
    /*
			Encrypt
			Allows you to Encrypt a piece of data with a given algorithm and secret Key.
			A few algorithm types can be found at: https://gist.github.com/sergibondarenko/f7200b20e34c5e7a4fc4f0234549e2bb
			@params - text - Text to be Encrypted
			@params - algo - Algorithm to use to encrypt. IE: aes-256-ct4, sha256, sha512, cast5-ofb
			@params - secret - Secret Key to use to Encrypt
			*/
    const cipher = crypto.createCipheriv(algo, secret, iv)
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
    return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex'),
    }
  },

  decrypt: (hash, algo = defaultAlgo, secret = defaultEncryptionKey) => {
    /*
			Decrypt
			Allows you to Decrypt a piece of data you encrypted from the Encrypt function.
			Make sure your Algorithm and Secret Line up with what you created it with.
			A few algorithm types can be found at: https://gist.github.com/sergibondarenko/f7200b20e34c5e7a4fc4f0234549e2bb
			@params - hash - Data to be decrypted
			@params - algo - Algorithm to use to encrypt. IE: aes-256-ct4, sha256, sha512, cast5-ofb
			@params - secret - Secret Key to use to Encrypt
			*/
    const decipher = crypto.createDecipheriv(algo, secret, Buffer.from(hash.iv, 'hex'))
    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(hash.content, 'hex')),
      decipher.final(),
    ])
    return decrpyted.toString()
  },
}
