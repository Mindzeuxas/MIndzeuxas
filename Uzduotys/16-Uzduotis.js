/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

console.log(pigIt('Hello world !'));


function pigIt(str){
    //Code here
    let words = str.split(' ');
    let firstChar = '';
    let newString = '';
    for (let i = 0; i < words.length; i++)
    {
        if (words[i].match(/^[.,:!?]/))
            continue;
        firstChar = words[i].charAt(0);
        newString = words[i].slice(1) + firstChar + 'ay';
        words[i] = newString;
    } 
    return words.join(' ');
  }