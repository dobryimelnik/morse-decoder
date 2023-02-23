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
    
    let res = '';
    for(let i = 1; i <= expr.length; i++ ) {   
        res += expr[i-1];
        
        if(i%2 == 0) res += '_';    
        if(i%10 == 0) res += '~'; 
    }

    res = res.replace(/11_/g, "-").replace(/00_/g, "").replace(/10_/g, ".").replace(/_/g, "");

    let arr = res.split('~');
    arr.pop();

    let newStr = '';

    arr.forEach(function(item) {
        for(let key in MORSE_TABLE) {
            if(key === item) newStr += MORSE_TABLE[key];
        }
        if(item == '**********') newStr += " ";
    });
    return newStr;
}

module.exports = {
    decode
}