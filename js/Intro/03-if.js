/*
operatoriai:
1. viso
2. naudotini
3. nenaudotini

*/

console.log(4,5,6, 789);
console.log (10, 20, 50);

/* jei norime, kad failas save executintu reikia ivesti npm init */


const colorsA = ["red", "green", "blue", "yellow", "red", "orange"];

let array = colorsA.filter((item, index, arr) => arr.indexOf(item) !== index);
console.log(array);
