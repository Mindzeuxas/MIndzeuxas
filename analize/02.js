//console.log(stringLenghtOfWord('Labas'));
// Sukurkite stringą ir išveskite jo ilgį.
function stringLenghtOfWord(word)
{
    return word.length;
}
//Konvertuokite stringą į didžiąsias raides.
function toUpper(str)
{
    return str.toUpperCase();
}
// Konvertuokite stringą į mažąsias raides.
function toLower(str)
{
    return str.toLowerCase();
}
// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
function trimOfString(str)
{
    return str.trim();
}
// Patikrinkite, ar stringas prasideda žodžiu "Hello".
function helloString(str)
{
    let arr = str.split('');
    return arr[i] === 'Hello' ? true : false;
}
// Patikrinkite, ar stringas baigiasi žodžiu "World".
function worldEnds(str)
{
    let arr = str.split('');
    return arr[arr.length - 1] === 'World' ? true : false;
}
// Raskite pirmąją žodžio "Java" poziciją string'e.
function javaLook(str)
{
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === 'Java')
            return i;    
}
// Raskite paskutinę žodžio "Java" poziciją string'e.
function javaLook2(str)
{
    let arr = str.split('');
    let number = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === 'Java')
          number = i;  
    return number;
}

console.log(changeJava("Java lives in Java world"));
// Pakeiskite pirmąjį "Java" į "JS".
function changeJava(str)
{
    return str.replace('Java', 'JS');
}
// Pakeiskite visus "Java" į "JS".
function changeJavaAll(str)
{
    return str.replaceAll('Java', 'JS');
}

//console.log(splitString(`kurmis; ieva ; tavija.`, ';'));
// Padalinkite stringą į masyvą pagal skyriklį.
function splitString(str, it)
{ 
    return str.split(it);
}

// Sujunkite du string'us į vieną.
function stringJoins(str1, str2)
{
    return str1.join(str2);
}

//console.log(stringPart("belenkaip"));
// Išskirkite string'o dalį nuo 3 iki 8 simbolio.
function stringPart(str)
{
    return str.slice(2 , 8);
}
//console.log(lastFiveChars('makalaka'));

// Naudodami slice, paimkite paskutinius 5 string'o simbolius.
function lastFiveChars(str)
{
    return str.slice(-5);
}

// Naudodami substring, paimkite pirmus 5 string'o simbolius.
function firstFiveSubstring(str)
{
    return str.subString(0, 4);
}

// Sukurkite stringą, kuris pakartojamas 4 kartus.
function fourTimes(str)
{
    for( let i = 0; i < 4; i++)
        console.log(str);
    return '';    
}

// Patikrinkite, ar string'e yra žodis "fun".

function isThere(str)
{
    return str.includes("fun");
}

// Išveskite stringą su kabutėmis "teksto" viduje.

function ticks(str)
{
    console.log(`Išveskite stringą su kabutėmis "teksto" viduje.`);
    return '';
}

// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
/**
 * 
 * @param {string} smth 
 * @returns same as parameter
 */

function documents(smth)
{
    return smth;
}

// Pašalinkite tarpus tik iš string'o pradžios.
function trimFrimStart(str)
{
    return str.trimStart();
}

//-----------------------------------------------------------------------------------------------------------------------------

// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
//console.log(firstUpperLetters('mokymo centras'));

function firstUpperLetters(words)
{
    let sentence = words.split(' ');
    for (let i = 0; i < sentence.length; i++)
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    return sentence.join(' ');
}

// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.

function shortening(str)
{
    return str.slice(0, 9) + '...';
}


// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
function backwards(str)
{
    return str.split('').reverse().join('');
}

// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.

function replaceSymbols(str)
{
    return str.replaceAll(',', ';');
}

// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".

function howLong(str)
{
    return str.split(' ').length;
}

// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.

function hasEtaAndEndsWithCom(str)
{
    let hasEta = str.includes('@');
    let comEnd = str.includes('.com') && str.endsWith('.com');
    return hasEta && comEnd ? true : false;
}

// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.

function firstSpaceDelete(str)
{
    return str.trimStart();
}

// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.

function twoWordsCompare(str, str2)
{
    return str.toLowerCase() === str2.toLowerCase ? true : false;
}

// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".

console.log(notNumber('a1b2c3'));


function notNumber(str)
{
    let reg = new RegExp('^[0-9]$');
    let newArr = [];
   let arr = str.split('');
   for (let i = 0; i < arr.length; i++)
        if (!reg.test(arr[i]))
            newArr.push(arr[i]);
   return newArr.join('');
}

// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.

function countNumebrs(str)
{
    let count = 0;
    let reg = new RegExp('^[0-9]$');
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++)
        if (reg.test(arr[i]))
            count++;
    return count;
}

// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.

function firstLetter(str)
{
    let arr = str.split('');
    let final = '';
    for(let i = 0; i < arr.length; i++)
        final = final.concat(arr[i][0]);
    return final;
}

// 12. Raskite pirmą žodį string'e "Hello World!".
//console.log(firstWord('Sueis pirma diena'));


function firstWord(str)
{
    let reg = /\p{P}/;
    if(!reg.test(str.charAt(0)))
        return str.split(' ')[0];
    return '';
}

// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.

//console.log(deleteThreeLast("JavaScript"));

function deleteThreeLast(str)
{
    return str.slice(0, -3);
}

// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.

function howManyDays(str)
{
    let daysLeft = 5;
    return `Likusios dienos: ${daysLeft}`; 
}

