const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let decodeString = '';
  let morseString = '';
  let count = 1;

  for(let i = 0; i < expr.length; i += 2) {
    switch(expr.slice(i, i + 2)) {
      case '10':
        morseString += '.';
        break;
      case '11':
        morseString += '-';
        break;
      case '**':
        morseString += ' ';
        break;
    }

    if (count%5 == 0 && i > 0) {
      decodeString += (morseString.trim()) ? MORSE_TABLE[morseString] : ' ';
      morseString = '';
    }

    ++count;
  }

  return decodeString;
}

module.exports = {
  decode
}
