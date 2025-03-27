/**
 * Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio
vardas, o toliau yra nevienodo kiekio skaičiaus tipo mokinio pažymiai
● Sukurkite funkciją, kuri padaro šiuos veiksmus:
○ Išveda mokinio vardą.
■ Padarykite, kad funkcija parašytų taisyklingai: arba ‘mokinio’ arba
‘mokinės’ vardas yra: …
○ Išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
○ Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį,
galėtų pasitaisyti savo vidurkį, ir koks tas įvertis turėtų būti.
 */

const students = [
    ['Jonas', 4, 6, 5, 8],
    ['Austėja', 9, 10, 8],
    ['Mantas', 3, 5, 4],
    ['Goda', 6, 7, 8, 9],
    ['Lukas', 4, 3, 2, 5],
    ['Ieva', 10, 9, 10]
];

function checkResult(student) {
    const name = student[0];
    const marks = student.slice(1); 
    const avg = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;    
    const gender = name.endsWith('a') ? 'Mokinės' : 'Mokinio';
    console.log(`${gender} vardas yra: ${name}`);
    console.log(`Vidurkis: ${avg.toFixed(2)}`);
    if (avg >= 5) 
        console.log(`${name} išlaikė kursą! 🎉`);
     else {
        console.log(`${name} neišlaikė kurso. 😢`);
        let neededMark = Math.ceil((5 * (marks.length + 1)) - marks.reduce((sum, paz) => sum + paz, 0));
        if (neededMark <= 10)
            console.log(`Jei ${name} gautų ${neededMark}, vidurkis būtų pakankamas.`);
         else console.log(`${name} jau nebegali ištaisyti kurso su vienu geru pažymiu.`);
    }
    return '--------------------------------';
}

console.log(checkResult(students[0]));
console.log(checkResult(students[1]));
console.log(checkResult(students[2]));
console.log(checkResult(students[3]));
console.log(checkResult(students[4]));
console.log(checkResult(students[5]));

