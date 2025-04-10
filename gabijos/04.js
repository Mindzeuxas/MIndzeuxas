/*
Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų
skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą [1, 1, 2, 3, 3, 3, 4] rezultatas
būtų gaunamas toks:
*/

function arrayForStars(arr)
{
    const obj = {};
    for (let i = 0; i < arr.length; i++) 
    {
        const star = arr[i];
        if (!obj[star]) 
            obj[star] = 1;
        else 
            obj[star]++;        
    }
    return Object.keys(obj).map(key => `${key}: ${'*'.repeat(obj[key])}`).join('\n');
}

console.log(arrayForStars([1, 1, 2, 3, 3, 3, 4]));
