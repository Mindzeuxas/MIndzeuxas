/* Parašykite funkciją, kuri apskaičiuoja skaičiaus faktorialą.
 * 
 * Pvz. faktorialas(5) -> 120
 */
function fact(n)
{ 
    if (n === 0)
        return 1;
        return n * fact(n - 1);
}

console.log(fact(5));


/**
 * Parašykite funkciją, kuri patikrina ar string'as yra palindromas.
 * 
 * Pvz. arPalindromas("level") -> true, arPalindromas("hello") -> false
 */

function polindrome(string)
{
    return string.split('').reverse().join('') === string ? true: false;
}

console.log(polindrome('level'));


/**
 * Sukurkite funkciją, kuri priima masyvą skaičių ir grąžiną antrą didžiausią skaičių.
 * 
 * Pvz. antrasDidziausias([10, 5, 8, 20]) -> 10
 */
function secondBiggest(arr)
{
   // let array = arr.;
    return arr.sort((a, b) => b - a)[1];   
}

console.log(secondBiggest([10, 5, 8, 20]));


/**
 * Parašykite funkciją, kuri sugeneruoja atsitiktinį slaptažodį iš didžiųjų, mažųjų raidžių ir skaičių.
 * 
 * Pvz. generuotiSlaptazodi(8) -> "aB3dE5kL"
 */
function generator(sk)
{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < sk) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    
}

console.log(generator(8));
/**
 * Parašykite funkciją, kuri tikrina ar skaičius yra Fibonačio skaičius.
 * 
 * Pvz. arFibonacio(8) → true, arFibonacio(10) → false
 */
function arFibonacio(sk)
{
    let fib = [0, 1];
    for (let i = 2; fib[i - 1] + fib[i - 2] <= sk; i++)
        fib.push(fib[i - 1] + fib[i - 2]);
    if (fib.includes(sk))
        return true;
    return false;
}
console.log(arFibonacio(832050));

/**
 * Parašykite funkciją, kuri iš teksto pašalina visus skaičius.
 * 
 * Pvz. beSkaiciu("Labas rytas, Lietuva 2025!") → "Labas rytas, Lietuva!"
 */
function beSkaiciu(str)
{
    let reg = /\d+/;
    let newReg = /\p{P}/;
    let arrOfWords = str.split(' ');
    let newStr = '';
    for(let i = 0; i < arrOfWords.length; i++)
    {
        arrOfWords[i] = arrOfWords[i].replace(reg, '');
        if (i < arrOfWords.length - 2 && !arrOfWords[i+1].match(newReg) )
            newStr += arrOfWords[i] + ' ';
        else newStr += arrOfWords[i];
    }
    return newStr;
}
console.log(beSkaiciu("Labas rytas, Lietuva 2025!"));


/**
 * Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina visus unikalius skaičius (pašalina pasikartojančius).
 * 
 * Pvz., unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
 */
function unikalusSkaiciai(arr)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        if (!newArr.includes(arr[i]))
            newArr.push(arr[i]);
    }
    return newArr;
}
console.log(unikalusSkaiciai([1, 2, 2, 3, 4, 4, 5]));


/**
 * Parašykite funkciją, kuri skaičiuoja, kiek kartų kiekviena raidė pasikartoja string‘e ir grąžina objektą.
 * 
 * Pvz., skaiciuotiRaidesObj("banana") → { b: 1, a: 3, n: 2 }
 */
function skaiciuotiRaidesObj(str)
{
    let arr = str.split('');
    let object = {};
    for(let i = 0; i < str.length; i++)
        if(!(arr[i] in object))
            object = {...object, [arr[i]] : 1};
        else object[arr[i]] = ( object[arr[i]] + 1 ) || 1;
    return object;
}
console.log(skaiciuotiRaidesObj("banana"));

/**
 * Sukurkite funkciją, kuri patikrina, ar du string‘ai yra anagramos (turi tas pačias raides, tik kita tvarka).
 * 
 * Pvz., arAnagrama("listen", "silent") → true, arAnagrama("hello", "world") → false
 */
function arAnagrama(str1, str2)
{
    if (str1.length !== str2.length)
        return false;
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if (str1 !== str2)
        return false;
    return true;
}
console.log(arAnagrama("hello", "world"));


/**
 * Raskite klaidą ir ištaisykite funkciją, kad ji pakeistų tiek didžiąsias, tiek mažąsias "a" į "@".
 */
function changeLetters(str)
{
    return str.replaceAll('a', '@').replaceAll('A', '@');
}

console.log(changeLetters('AbabaBA'));
