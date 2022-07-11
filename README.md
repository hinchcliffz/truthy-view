# Truthy View

![Truthy View](/assets/img/logo.svg 'Truthy View logo')

Truthy View is a way to fingerprint connections as well as users.

[![Truthy View - CI](https://github.com/hinchcliffz/truthy-view/actions/workflows/node.js.yml/badge.svg)](https://github.com/hinchcliffz/truthy-view/actions/workflows/node.js.yml)

[![Coverage Status](https://coveralls.io/repos/github/hinchcliffz/truthy-view/badge.svg?t=T7lKik)](https://coveralls.io/github/hinchcliffz/truthy-view)

# Description

Truthy View is a library you can use to help fingerprint users and usage. It allows you to use abstract tools to work around the normal fingerprinting methodology.

# Library files

- **encryption.js** - Used for Encrypting and Decrypting of data with various algorithms.
- **flatten.js** - Used for Flattening Hashes for storing in single strings.
- **macAddress.js** - Used for tools related to mac address collection and validation.
- **traceIp.js** - Used for tracing IP addresses.

# Configuration

You can find the configs in `config/default.json` this will allow you to change any of the preset library defaults.

# Functions Documentation
## Truthy View
This is the main class that holds all the functions. You can initialize it with 
```bash
import TruthyView from 'truthyview'
const truth = new TruthyView()
```
## Encryption
### Encrypting Data
To Encrypt data down you can use the following Syntax be sure and await the response.
```javascript
const encrypted = await truth.encryption.encrypt('data to encrypt')
```
### Decrypting 
To Decrypt data pass back in the hash you want to decrypt.
```javascript
const decrypted = await truth.encryption.decrypt(encrypted)
```
## Author

**Zachary Hinchcliff** - hinchcliffz
