const alphabet = 'abcdefghijklmnopqrstuvwxyz'

/**
 * @param {string} key - The key to generate substitution key.
 * @returns {string} - Generated key.
 */
const generateSubstitutionKey = (key) => {
  let generatedKey = key.toLowerCase()

  for (let i = 0; i < alphabet.length; i++) {
    let foundChar = false

    for (let j = 0; j < key.length; j++) {
      if (alphabet[i] === key[j]) {
        foundChar = true
        break
      } 
    }

    if (!foundChar) {
      generatedKey += alphabet[i]
    }
  }

  return generatedKey
}

/**
 * Looks in alphabet for given `char`, if finds such one, replaces it with appropriate one from the `generatedKey`.
 * @param {string} char  - Char to convert with.
 * @param {string} generatedKey - The generated key.
 * @returns {string} Encrypted character.
 */
const cryptChar = (char, generatedKey) => {
  for (let i = 0; i <= alphabet.length; i++) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      if (char === alphabet[i]) {
        return generatedKey[i]
      }
    }
    else {
      return char
    }
  }
}

/**
 * Looks in `generatedKey` for given `char`, if finds such one, replaces it with appropriate one from the alphabet.
 * @param {string} char  - Char to convert with.
 * @param {string} generatedKey - The generated key.
 * @returns {string} Decrypted character.
 */
const decryptChar = (char, generatedKey) => {
  for (let i = 0; i <= generatedKey.length; i++) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      if (char === generatedKey[i]) {
        return alphabet[i]
      }
    }
    else {
      return char
    }
  } 
}

/**
 * Generates the substitution key by given `key`. Wraps message into array and maps through it
 *  with given `transformer` function.
 * @param {string} message - The message to transform.
 * @param {string} key - The key for transforming the message.
 * @param {Function} transformer - Transformer function.
 */
const transformMessage = (message, key, transformer) => {
  const generatedKey = generateSubstitutionKey(key)
  const messageWrappedIntoArray = message.toLowerCase().split('')

  return messageWrappedIntoArray.map((char) => transformer(char, generatedKey)).join('')
}

module.exports = {
  transformMessage,
  cryptChar,
  decryptChar
}
