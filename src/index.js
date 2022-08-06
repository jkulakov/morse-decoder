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
    const symbols = [];
    symbols[10] = '.';
    symbols[11] = '-';
    let words = expr.split('**********');

    words.map((item, i, array) => {
        let letterCount = item.length / 10;
        let letters = [];
        let start = 0,
            end = 10;
            for (let i = 0; i < letterCount; i++) {
                letters[i] = item.slice(start, end);
                start = start + 10; end = end + 10;
                if(i == letterCount - 1) { start = 0; end = 10; }
            }    
        letters.map((item, i, arr) => {
            let newLetter = '';
            let jStart = 8;
            let jEnd = 10;
            for (let j = 5; j > 0; j--) {
                if(item.slice(jStart, jEnd) != '00') newLetter = symbols[item.slice(jStart, jEnd)] + newLetter;
                jStart -= 2;
                jEnd -= 2;
                if(j == 1) arr[i] = MORSE_TABLE[newLetter];  
            }
        });
        array[i] = letters.join('');
    });
    return words.join(' ');
}

module.exports = {
    decode
}

decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010');