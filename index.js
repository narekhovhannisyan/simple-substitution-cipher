const simpleSubstitution = require('./simple-substitution')

const plainText = process.env.string
const key = process.env.key

const encryptedText = simpleSubstitution.transformMessage(plainText, key, simpleSubstitution.cryptChar)
console.log(encryptedText)

const decryptedText = simpleSubstitution.transformMessage(encryptedText, key, simpleSubstitution.decryptChar)
console.log(decryptedText)
