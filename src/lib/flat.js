const flatten = async (hash) => {
  /*
    Flatten
    Flatten an Encrypted Hash down to be stored in Cookies, Local Storage or Sessions.
    @param - hash - Hash Input from our Encrypt Function
    */
  if (hash.iv && hash.content) {
    const iv = hash.iv
    const content = hash.content
    const flatten = iv + '_' + content
    return flatten
  } else {
    throw new Error('Must Flatten an Encrypted Hash Object')
  }
}

const unflatten = async (flat) => {
  /* 
    Unflatten
    Unflatten a flattened hash object.
    @param - flat - A flattened Encryption Object
    */
  const split = flat.split('_')
  return {
    iv: split[0],
    content: split[1],
  }
}

module.exports = {
  flatten,
  unflatten,
}
