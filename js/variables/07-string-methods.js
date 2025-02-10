
//1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.

function replaceFirstLetters(str)
{
    let sentence = str.split(' ');
    for (let i = 0; i < sentence.length; i++)
    {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
}

console.log(cutAt('JavaScript programavimas'));

function cutAt(str)
{
    str = str.slice(0, 10) + '...';
    return str;
}

console.log(backwards("javascript"));

function backwards(str)
{
    return str.split('').reverse().join('');
}

console.log(replaceSymbols('obuolys, bananas, kivis'));

function replaceSymbols(str)
{
    return str.replaceAll(',', ';');
}

function howManyWords(str)
{
    return str.split('').length;
}
console.log(hasEtaAndEndsWithCom('test@gmail.com'));

function hasEtaAndEndsWithCom(str)
{
    let hasEta = str.includes('@');
    let comEnd = str.includes('.com') && str.endsWith('.com');
    return hasEta && comEnd ? true : false;
}