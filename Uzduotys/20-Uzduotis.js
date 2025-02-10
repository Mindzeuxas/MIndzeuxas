/*
Implement a function that returns the minimal and the maximal value of a list (in this order).


*/
console.log(getMinMax([1]));
console.log(getMinMax([1, 2]));
console.log(getMinMax([2, 1]));




function getMinMax(arr){
    //..
    let minMaxArr = [];
    minMaxArr.push(Math.min(...arr), Math.max(...arr));
    return minMaxArr;
  };