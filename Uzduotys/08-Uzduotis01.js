/*You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/
console.log(expandedForm('52'))

function expandedForm(num) {
    // Your code here
    let final = '';
    if (!(/^\d+$/.test(num)))
        return 'wrong entry...';
    let digits = [];
    let newNumbers = [];
    let filteredNumbers = [];
    digits = num.toString().split('').reverse();
    for (let i = 0; i < digits.length; i++)
    {   
        newNumbers[i] = digits[i] * Math.pow(10, i);
    }
    newNumbers = newNumbers.reverse();
    for (let i = 0; i < newNumbers.length; i++)
    {
        if (newNumbers[i] !== 0)
           filteredNumbers.push(newNumbers[i]);
    }
    for (let i = 0; i < filteredNumbers.length; i++)
    {
        if (i === filteredNumbers.length - 1)
            final = final.concat(filteredNumbers[i]);
        else final = final.concat(filteredNumbers[i], ' + ');
    }
    return final;

}
