/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


*/
console.log(alphabetPosition("The sunset sets at twelve o' clock"));

function alphabetPosition(text) {
    
    let alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
    let letters = text.split(' ').join('').toLowerCase().replace(/[^a-zA-Z]/g, '').split('');
    let locations = [];
    for (let i = 0; i < letters.length; i++)
    {
        for(let j = 0; alphabeth.length; j++)
        {
            if (letters[i] === alphabeth[j])
                {
                    locations[i] = j + 1;
                    break;
                }
        }

    }
    return locations.join(' ');
  }