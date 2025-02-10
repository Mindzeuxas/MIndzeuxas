/*
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000
 */
console.log(manipulate(938473));

function manipulate(num) { 
  let arr = num.toString().split('');
  let half = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++)
      if (i >= half)
        arr[i] = '0';
  return Number(arr.join(''));
} 