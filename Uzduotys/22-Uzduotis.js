/*returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

 
function isIntArray(arr) {
    if (!Array.isArray(arr) || !arr.length === 0)
        return false;
    for (let i = 0; i < arr.length; i++)
        if (Number.isNaN(arr[i]) || arr[i] === undefined  || !Number.isInteger(arr[i])) 
    return false;
    return true;
  }