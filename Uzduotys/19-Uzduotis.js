/*
Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]
The function should combine all the 0th indexed letters of each sub-array to create the word Just, all the 1st indexed letters of each sub-array to create the word Live, etc.

If a word is shorter than the maximum length, the remaining positions in the sub-array will contain empty strings (e.g., the last element in the last sub-array).

Examples:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
] // => "Just Live Life Man"

[ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ]
] // => "The Mitochondria is the powerhouse of the cell"

*/
console.log(arrAdder( [
    ["T","M","i","t","p","o","t","c"],
    ["h","i","s","h","o","f","h","e"],
    ["e","t","","e","w","","e","l"],
    ["","o","","","e","","","l"],
    ["","c","","","r","","",""],
    ["","h","","","h","","",""],
    ["","o","","","o","","",""],
    ["","n","","","u","","",""],
    ["","d","","","s","","",""],
    ["","r","","","e","","",""],
    ["","i","","","","","",""],
    ["","a","","","","","",""]]));


function arrAdder(arr) {
    let stringas = '';
    let stringasFinal = '';
    for (let i = 0; i < arr[0].length; i++)
    {
        stringas = '';
        for (let j = 0; j < arr.length; j++)
            stringas = stringas.concat(arr[j][i]);
       if (i === arr[0].length - 1)
            stringasFinal = stringasFinal.concat(stringas);
       else stringasFinal = stringasFinal.concat(stringas, ' ');
    }
    return stringasFinal; // your code here
   }