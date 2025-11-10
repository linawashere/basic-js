const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    let encryptedMessage = '';
    let keyLength = key.length;
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentChar = message[i];
      if (currentChar.match(/[a-zA-Z]/)) {

      }
    }
  }
  decrypt(message, key) {
    let messToUpperCase = [];
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) >= 122) {
        message[i] = message[i].toUpperCase();
        messToUpperCase.push(message[i]);
      } else {
        messToUpperCase.push(message[i]);
      }
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
