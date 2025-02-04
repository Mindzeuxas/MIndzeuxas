/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/
let lai = [5, 0, 0];
console.log(findUniq([...lai]));


/*function findUniq(arr) {
    // do magic
   
    for(let i = 0; arr.length; i++)
    {
        let unique = arr[i];
        let repetitive = false;
        for (let j = 0; j <arr.length; j++)
            if (unique === arr[j] && i !== j)
                repetitive = true;
        if (!repetitive) 
            return unique;
    }
  }
    */

  function findUniq(arr)
  {
    let map = new Map();
    for(let item of arr)
    {
        map.set(item, (map.get(item)||0) + 1);
    }
    for(let item of map)
    {
       return map.get(item) === 1 ? map.get(item): '';
    }
  }
  