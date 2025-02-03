/*

Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

*/ 

//console.log(firstNonRepeatingLetter('4+</J!VO7k496xc-u > '));
/*function firstNonRepeatingLetter(s) {
    
  const freqCounter = {};
    for (const char of s) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }
    let minFrequency = Infinity;
    let leastFrequentChar = '';
    for (const char in freqCounter) {
        if (freqCounter[char] < minFrequency)
        {
            minFrequency = freqCounter[char];
            leastFrequentChar = char;
        }
    }
    return leastFrequentChar;  
       */

    function firstNonRepeatingLetter(string) {
        const charCounts = new Map();
        const lowerCaseString = string.toLowerCase();
    
        for (const char of lowerCaseString) {
            charCounts.set(char, (charCounts.get(char) || 0) + 1);
        }
    
        for (let i = 0; i < string.length; i++) {
            if (charCounts.get(lowerCaseString[i]) === 1) {
                return string[i];
            }
        }
    
        return '';
    }
    
    //console.log(firstNonRepeatingLetter('stress'));
    console.log(firstNonRepeatingLetter('papapatta'));
        
    

    
  