/*

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

*/
console.log(shorterReverseLonger("first", "abcde"))

function shorterReverseLonger(a,b){
   
    let longer = '';
    let shorter = '';
    let reversed = '';
    //let final = '';
    if (a.length >= b.length)
    {
        longer = a;
        shorter = b;
    }
    else 
    {
        longer = b;
        shorter = a;
    }
    reversed = longer.split('').reverse().join(''); 
    return shorter.concat(reversed, shorter);
  }