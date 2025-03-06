/*Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

"12
12"
Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

"123
123
123"
Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
 */

function squareIt(int) {
   
    let splitNumber = int.toString().split('');
    let sqrtNum = Math.sqrt(splitNumber.length);
    if (sqrtNum % 1 !== 0)
        return 'Not a perfect square!';
    let stringModed = '';
    for (let i = 0; i <  splitNumber.length; i++)
    {
        stringModed = stringModed.concat(splitNumber[i]);
        if (i % sqrtNum  === sqrtNum - 1 && i !== splitNumber.length -1 && splitNumber.length !== 1)
            stringModed = stringModed.concat('\n');
    }
    return stringModed;
  }

  console.log(squareIt(6215));

  /*
  const toNumber = x => +x;


  */