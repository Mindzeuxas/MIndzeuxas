// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================

function grazusSutvarkymas(uzdNmb,rez1, rez2, secondName, rez3)
{
    console.log(`================================= ${uzdNmb} uzduotis =============================================`);
    console.log(`Sprendimas su for ciklu: ${rez1}`);
    console.log(`Sprendimas su ${secondName} metodu: ${rez2}`);
    if (rez3 !== undefined)
       console.log(`Dar vienas sprendimas kitu budu: ${rez3}`);
    console.log(`===========================================================================================`);
   return ''; 
}

const numbers1 = [1, 2, 3, 4, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

 function forSum(arr)
 {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
 }
// Sprendimas su array metodu (reduce):
// Jūsų kodas čia...
function redSum(arr)
{
    return arr.reduce((a, b) => a + b);
} 

console.log(grazusSutvarkymas(1, forSum(numbers1), redSum(numbers1), 'reduce'));


// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
const numbers2 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function howManyEvenFor(arr)
{
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 === 0)
            count++;
    return count;
}


// Sprendimas su filter metodu:
// Jūsų kodas čia...
 
 function howManyEvenFilter(arr)
 {
    return arr.filter((a) => a % 2 === 0).length;
 }
 console.log(grazusSutvarkymas(2, howManyEvenFor(numbers2), howManyEvenFilter(numbers2), 'filter'));
 //console.log(howManyEvenFilter(numbers2));
 
// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function maxByFor(arr)
{
    let maxNumber = -Infinity;
    for (let i = 0; i < arr.length; i++)
        if (maxNumber <= arr[i])
            maxNumber = arr[i];
    return maxNumber;
}
 
 
// Sprendimas su Math.max ir spread operator:
// Jūsų kodas čia...
 
 function maxByFunc(arr)
 {
    return Math.max(...arr);
 }
 console.log(grazusSutvarkymas(3, maxByFor(numbers3),maxByFunc(numbers3), 'Math.max and spread'));
 //console.log(maxByFunc(numbers3));
 
// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
const numbers4 = [1, 2, 3, 2, 4, 2, 5, 2, 2];
const target = 2;
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 function pofFor(arr, symb)
 {
    let count = 0;
    for (let i = 0; i < arr.length; i++) 
        if (arr[i] === symb)
            count++;
    return count;
 }
 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
 function pofFil(arr, symb)
 {
    return arr.filter((a) => a === symb).length;
 }
 console.log(grazusSutvarkymas(4, pofFor(numbers4, target), pofFil(numbers4, target), 'filter'));
 
 //console.log(pofFil(numbers4));
 
// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
const numbers5 = [-3, 0, 5, -1, 8, -2];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
 function posFor(arr)
 {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)   
        if (arr[i] > 0)
        newArr.push(arr[i]);
    return newArr;
 }
    
 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
 
 function posFil(arr)
 {
    return arr.filter((a) => a > 0);
 }
 console.log(grazusSutvarkymas(5, posFor(numbers5), posFil(numbers5), 'filter'));
// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
const numbers6 = [1, 2, 3, 4];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function forForMul(arr)
{
    let mul = 1;
    for (let i = 0; i < arr.length; i++)
        mul *= arr[i];
    return mul;
}
// Sprendimas su reduce metodu:
// Jūsų kodas čia...
function mulByRed(arr)
{
    return arr.reduce((a, b) => a * b); 
}
console.log(grazusSutvarkymas(6, forForMul(numbers6), mulByRed(numbers6), 'reduce'));
// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
const array7 = [1, 2, 3, 4, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 function newArrayFor(arr)
 {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) 
        newArr.push(arr[i]);
    return newArr; 
}
 // Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
 
function newArrReversed(arr)
{
    return [...arr].reverse();
}
console.log(grazusSutvarkymas(7, newArrayFor(array7), newArrReversed(array7), 'reverse')); 
//console.log(newArrReversed(array7));

// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
const array8 = ['a', 'b', 'c', 'd'];
const searchElement = 'c';
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
 function witchElementFor(arr, target)
 {
    for(let i = 0; i < arr.length; i++)
        if (arr[i] === target)
            return i;
    return -1;
 }
//console.log(witchElementFor(array8, searchElement))
// Sprendimas su indexOf metodu:
// Jūsų kodas čia...
 function witchElementIndex(arr, target)
 {
    return arr.indexOf(target);
 }
 console.log(grazusSutvarkymas(8, witchElementFor(array8, searchElement), witchElementIndex(array8, searchElement), 'indexOf'));
 
// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
const array9 = [1, 3, 5, 7, 4, 9];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 function arrayAscFor(arr)
 {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > arr[i + 1])
            return false;
    return true;
}

//console.log(arrayAscFor(array9));
// Sprendimas su every metodu:
// Jūsų kodas čia...
 function arrAscEvery(arr)
 {
    return arr.every((num, i) => i === 0 || num >= arr[i - 1]);
 }
 console.log(grazusSutvarkymas(9, arrayAscFor(array9), arrAscEvery(array9), 'every'));
 //console.log(arrAscEvery(array9));
 
// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
const numbers10 = [1, 2, 3, 4, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 function forSquare(arr)
 {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
        newArr.push(arr[i] * arr[i]);
    return newArr;
 } 
// Sprendimas su map metodu:
// Jūsų kodas čia...
 
 function mapSquare(arr)
 {
    return arr.map((n) => n * n);
 }
 console.log(grazusSutvarkymas(10, forSquare(numbers10), mapSquare(numbers10), 'map'));

// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
const numbers11 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 function oddSumFor(arr)
 {
    sum = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 === 0)
            sum += arr[i];
    return sum;
 }
 
// Sprendimas su filter ir reduce:
// Jūsų kodas čia...
 
 function oddSumFillRed(arr)
 {
    return arr.filter((a) => a % 2 === 0).reduce((a, b) => a + b);
 }
 console.log(grazusSutvarkymas(11, oddSumFor(numbers11), oddSumFillRed(numbers11), 'filter and reduce'));
// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
const numbers12 = [10, 20, 30, 40, 50];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function averageFor(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}
 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 function averageReduce(arr)
 {
    return arr.reduce((a, b) => a + b) / arr.length;
 }
 console.log(grazusSutvarkymas(12, averageFor(numbers12), averageReduce(numbers12), 'reduce'));
// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
const numbers13 = [1, 2, 3, 2, 4, 3, 5];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

function sameFor(arr)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
        if (!newArr.includes(arr[i]))
            newArr.push(arr[i]);
    return newArr;
}
 
// Sprendimas su Set:
// Jūsų kodas čia...
 
 function someSet(arr)
 {
    return new Set([...arr]);
 } 
 console.log(grazusSutvarkymas(13, sameFor(numbers13), someSet(numbers13), 'Set'));
 // =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
const numbers14 = [5, 3, 9, 1, 7];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

function secondBiggestFor(arr)
{
    let biggest = -Infinity;
    let secondBiggest = -Infinity;
    for (let i = 0; i < arr.length; i++)
        if(biggest < arr[i])
            biggest = arr[i];    
    for (let i = 0; i < arr.length; i++)
        if (secondBiggest < arr[i] && arr[i] !== biggest)
            secondBiggest = arr[i];
    return secondBiggest;
}
 
// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
function secondBiggestSort(arr)
{
    return [...arr].sort((a, b) => b - a)[1];
}
console.log(grazusSutvarkymas(14, secondBiggestFor(numbers14), secondBiggestSort(numbers14), 'sort'));
// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function howBiggerFor(arr, holder)
{
    let counter = 0;
    for(let i = 0; i < arr.length; i++)
        if (arr[i] > holder)
            counter++;
    return counter;
}
 
// Sprendimas su filter:
// Jūsų kodas čia...
 function biggerThanFilter(arr, holder)
 {
    return arr.filter((n) => n > holder).length;
 }
 console.log(grazusSutvarkymas(15, howBiggerFor(numbers15, threshold), biggerThanFilter(numbers15, threshold), 'filter'));
// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function concatWithFor(arr, arr2)
{
    for (let i = 0; i < arr2.length; i++)
        arr.push(arr2[i]);
    return arr;
}
 
// Sprendimas su concat metodu:
// Jūsų kodas čia...

function concatWithConcat(arr, arr2)
{
    return arr.concat(arr2);
} 
console.log(grazusSutvarkymas(16, concatWithFor([...arrayA], [...arrayB]), concatWithConcat([...arrayA], [...arrayB]), 'concat'));
// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [[1, 2], [3, 4], [5, 6]];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
function nestedWithFor(arr)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
        for(let j = 0; j < arr[i].length; j++)
            newArr.push(arr[i][j]);
    return newArr;
}

function nestedWithForSpread(arr)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
            newArr.push(...arr[i]);
    return newArr;
} 

// Sprendimas su flat metodu:
// Jūsų kodas čia...
 
 function nestedWithFlat(arr)
 {
    return arr.flat();
 }
 console.log(grazusSutvarkymas(17, nestedWithFor(nestedArray), nestedWithFlat(nestedArray), 'flat', nestedWithForSpread(nestedArray)));
// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

function unionFor(arr, arr2)
{
    //let longer = arr.length > arr2.length ? arr.length : arr2.length;
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
        if (arr2.includes(arr[i]))
            newArr.push(arr[i]);
    return newArr;
}
 
// Sprendimas su filter:
// Jūsų kodas čia...
function unionFilter(arr, arr2)
{
    return arr2.filter((a) => arr.some(b => a === b));
}
 
console.log(grazusSutvarkymas(18, unionFor(arrA, arrB), unionFilter(arrA, arrB), 'filter')); 
// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
const numbers19 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

function evenOddFor(arr)
{
    let object = {lyginiai:[], nelyginiai:[]};
    for (let i = 0; i < arr.length; i++)
        (arr[i] % 2 === 0)? object.lyginiai.push(arr[i]): object.nelyginiai.push(arr[i]);
    return object;
}


// Sprendimas su reduce:
// Jūsų kodas čia...
 
function evenOddReduce(arr)
{
    return arr.reduce((obj, item) => {
         (item % 2 === 0) ? obj.lyginiai.push(item) : obj.nelyginiai.push(item);
       return obj;
    }, {lyginiai:[], nelyginiai:[]});
    
}
console.log(grazusSutvarkymas(19, evenOddFor(numbers19), evenOddReduce(numbers19), 'reduce'));
//console.log(evenOddReduce([...numbers19]));

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function kumSumFor(arr)
{
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
        newArr[i] = sum;
    }
    return newArr;
} 


// Sprendimas su reduce:
// Jūsų kodas čia...

function kumSumReduce2(arr)
{
    return arr.reduce((newArr, item, index) => {
         (index === 0) ? newArr.push(item) : newArr.push(newArr[index - 1] + item);
            return newArr;
    } ,[]);
}

console.log(grazusSutvarkymas(20, kumSumFor([...numbers20]), kumSumReduce2([...numbers20]), 'reduce'));


 // Paklausti kai reikia inicializuoti daugiau nei viena reiksme reduce funkcijoje


/*The splice() method reads the length property of this. It then updates the integer-keyed properties and the length property as needed.

js
Copy to Clipboard
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }*/
/*is kur atsirado '3': 4?*/
