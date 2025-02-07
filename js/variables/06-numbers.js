
console.log(2 ** 5); // dviguba zvaigzdute kelia laipsniu
console.log(Math.PI.toFixed(50));
//arr[i] * Math.pow(10, i)
//arr[i] * (10 ** i);


/** dokumentacija
 * returns integer in interval with both sides
 * @param {number} min - min value in interval
 * @param {number} max  - max value in interval
 * @returns {number} - returns integer in interval
 */
function randomize(min, max)
{
    return Math.floor(Math.random * (max - min + 1)) + min;

}
//tas +1 reikalingas, kad ir galine reiksme paimtu
function apvalinimas(a, amount)
{
    return Math.round(a * (10 ** amount)) / (10 ** amount);
}

console.log(getSum(16));
function getSum(num)
{
    let suma = 0;
    while(num / 10 > 0)
    {
        suma += ((num % 10));
        num = Math.floor(num  / 10);
    }

    return suma;
}
console.log(getArray(5));

function getArray(number)
{
    let arr = [];
    for (let i = 1; i <= 10; i++)
    {
        arr[i - 1] = number * i;
        //arr.push(number * i);
    }
    return arr;
}