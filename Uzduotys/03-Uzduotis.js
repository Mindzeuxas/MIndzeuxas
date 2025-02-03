/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

*/
let kata = ['a','b','c','d','f'];
console.log(findMissingLetter([...kata]));

function findMissingLetter(array)
{
    let alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let simbol = 0;
    if (array.length < 2 )
        return "wrong entry";
    let letter = '';
    let location = 0;
    for (let i = 0; i < 52; i++)
    {
        if (array[0] === alphabeth[i])
            {
                location = i;
                break;
            } 
    }
    for (let i = location; i <= array.length + location; i++)
    {
        if (array[simbol] !== alphabeth[i])
            {
                letter = alphabeth[i];
                break;
            }
        simbol++;
    }
  return letter;
}