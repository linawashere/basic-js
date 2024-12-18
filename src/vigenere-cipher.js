const { NotImplementedError } = require('../extensions/index.js');

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
    // let messToUpperCase = [];
    // let keyToUpperCase = [];
    // if (!message || !key) {
    //   throw new Error('Incorrect arguments!');
    // }
    // for (let i = 0; i < message.length; i++) {
    //   if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
    //     message[i] = message[i].toUpperCase();
    //     messToUpperCase.push(message[i]);
    //   } else {
    //     messToUpperCase.push(message[i]);
    //   }
    // }
    // if (message.length > key.length) { //удлинение ключа
    //   while (key.length !== message.length) {
    //     for (const letter of key) {
    //       key += letter;
    //     }
    //   }
    // }
    // for (let i = 0; i < key.length; i++) {
    //   if (key.charCodeAt(i) >= 97 && key.charCodeAt(i) <= 122) {
    //     key[i] = key[i].toUpperCase();
    //     keyToUpperCase.push(key[i]);
    //   } else {
    //     keyToUpperCase.push(key[i]);
    //   }
    // }
    // const numbersOfMessage = [];
    // const numbersOfKey = [];
    // for (let i = 0; i < messToUpperCase.length; i++) {
    //   if (
    //     messToUpperCase[i] >= 'A' && messToUpperCase[i] <= 'Z' ||
    //     keyToUpperCase[i] >= 'A' && keyToUpperCase[i] <= 'Z'
    //   ) {
    //     numbersOfMessage.push(messToUpperCase.charCodeAt(i) - 64);
    //     numbersOfKey.push(keyToUpperCase.charCodeAt(i) - 64);
    //   }
    // }
    // const cipher = numbersOfMessage.map((item, index) =>{
    //   return item + numbersOfKey[index];
    // });
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
  VigenereCipheringMachine
};
