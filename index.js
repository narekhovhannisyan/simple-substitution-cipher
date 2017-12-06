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

const convertCharToCrypt = (char, generatedKey) => {
  // TODO: implement this function.
}

const encrypt = (message, key) => {
  const generatedKey = generateSubstitutionKey(key)
  const messageWrappedIntoArray = message.split('')

  return messageWrappedIntoArray.map(char => () => convertCharToCrypt(char, generatedKey)).join('')
}
