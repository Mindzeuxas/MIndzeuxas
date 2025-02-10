/*Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/

console.log(averageLength(['u']));

function averageLength(array) { 
    let sum = 0;
    let char = '';
    let newString = '';
    for (let i = 0; i < array.length; i++)
        sum += array[i].length
    let average =  Math.round(sum / array.length);
    for (let i = 0; i < array.length; i++)
    {
        newString = '';
        char = array[i].charAt(0);
        for (let j = 0; j < average; j++)
            newString = newString.concat(char);
        array[i] = newString;
    }
    return array;
  }