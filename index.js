/**
 * @param {string} key - The key to generate substitution key.
 * @returns {string} - Generated key.
 */
const generateSubstitutionKey = (key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
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
