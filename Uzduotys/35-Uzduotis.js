/*Twice linear
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency


*/

function dblLinear(n) {
    let set = new Set(); // Sukuriame `Set`, kad išvengtume pasikartojančių skaičių
    let q2 = [1], q3 = [1]; // Dvi eilės (queue) dviems formulėms: y = 2*x + 1 ir z = 3*x + 1
    let value = 1; // Inicializuojame pirmąjį sekos elementą

    // Kartojame ciklą n kartų, nes ieškome n-tojo elemento
    for (let i = 0; i < n; i++) {
        let first = 2 * q2[0] + 1; // Apskaičiuojame sekantį skaičių pagal formulę 2*x + 1
        let second = 3 * q3[0] + 1; // Apskaičiuojame sekantį skaičių pagal formulę 3*x + 1

        // Pasirenkame mažesnį iš dviejų kandidatų ir pašaliname jį iš atitinkamos eilės
        if (first < second) {
            value = first;
            q2.shift(); // Iš eilės pašaliname jau apdorotą elementą
        } else if (first > second) {
            value = second;
            q3.shift();
        } else { // Jei abu kandidatai yra vienodi, pašaliname iš abiejų eilių, kad išvengtume dublikatų
            value = first;
            q2.shift();
            q3.shift();
        }

        // Tikriname, ar skaičius jau egzistuoja `Set`, jei ne – pridedame į abi eiles
        if (!set.has(value)) {
            set.add(value); // Pažymime, kad šis skaičius jau panaudotas
            q2.push(value); // Pridedame į eilę, kad jį galima būtų naudoti 2*x + 1 formulei
            q3.push(value); // Pridedame į eilę, kad jį galima būtų naudoti 3*x + 1 formulei
        }
    }
    
    return value; // Grąžiname n-tąjį elementą iš sekos
}
    
    


console.log("10 => " + dblLinear(10) + ' EXPECTED 22');
console.log("20 => " + dblLinear(20) + ' EXPECTED 57');
console.log("30 => " + dblLinear(30) + ' EXPECTED 91');
console.log("50 => " + dblLinear(50) + ' EXPECTED 175');
console.log("100 => " + dblLinear(100) + ' EXPECTED 447');

