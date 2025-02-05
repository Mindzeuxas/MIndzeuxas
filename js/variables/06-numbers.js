
console.log(2 ** 5); // dviguba zvaigzdute kelia laipsniu
console.log(Math.PI.toFixed(50));
//arr[i] * Math.pow(10, i)
//arr[i] * (10 ** i);


/**
 * returns integer in interval
 * @param {number} min - min value in interval
 * @param {number} max  - max value in interval
 * @returns {number} - returns integer in interval
 */
function randomize(min, max)
{
    return Math.floor(Math.random * (max - min + 1)) + min;

}