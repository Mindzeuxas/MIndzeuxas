/*
Susikurkite 7 sąrašus, kuriose yra talpinamos skirtingų dienų temperatūros vertės
a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą.
b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausią
temperatūrą.
c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą.
d. Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną
buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra
e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą
f. Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos
numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų
kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir
šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir
pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Jei pasiūlymų
nėra, praneškite kad šiandienos oras eiti į lauką yra puikus. Kokia
temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta
turėtų būti bent 0 laipsnių kad kristų sniegas
*/


const pirmadienis = [5, 8, 7, 3, 12, 15, 18];
const antradienis = [10, 12, 14, 15, 18, 20, 22];
const trečiadienis = [15, 18, 20, 22, 25, 28, 30];
const ketvirtadienis = [20, 22, 25, 28, 30, 32, 35];
const penktadienis = [25, 28, 30, 22, 16, 18, 25];
const šeštadienis = [20, 15, 25, 12, 8, 12, 15];
const sekmadienis = [24, 11, 23, 14, 7, 8, 17];

function averageTemperature(day) {
    const sum = day.reduce((acc, temp) => acc + temp, 0);
    return (sum / day.length).toFixed(2);
}

function maxTemperature(day) {
    return Math.max(...day);
}

function minTemperature(day) {
    return Math.min(...day);
}

function findLowestTemperatureDay(days) {
    let lowestDay = days[0];
    let dayIndex = 0;
    let lowestTemp = minTemperature(lowestDay);
    for (let i = 1; i < days.length; i++) {
        const currentTemp = minTemperature(days[i]);
        if (currentTemp < lowestTemp) {
            lowestTemp = currentTemp;
            lowestDay = days[i];
            dayIndex = i;
        }
    }
    return [lowestDay, dayIndex];
}
function findHighestTemperatureDay(days) {
    let highestDay = days[0];
    let dayIndex = 0;
    let highestTemp = maxTemperature(highestDay);
    for (let i = 1; i < days.length; i++) {
        const currentTemp = maxTemperature(days[i]);
        if (currentTemp > highestTemp) {
            highestTemp = currentTemp;
            highestDay = days[i];
            dayIndex = i;
        }
    }
    return [highestDay, dayIndex];
}
function lowestAndHighestTemperatureDay(days) {
    const [lowestDay, lowestIndex] = findLowestTemperatureDay(days);
    const [highestDay, highestIndex] = findHighestTemperatureDay(days);
    const daysOfWeek = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];
    const lowestDayName = daysOfWeek[lowestIndex];
    const highestDayName = daysOfWeek[highestIndex];
    return `Žemiausia temperatūra buvo ${minTemperature(lowestDay)} °C dieną ${lowestDayName}, o aukščiausia temperatūra buvo ${maxTemperature(highestDay)} °C dieną ${highestDayName}.`;
}

function averageWeekTemperature(days) {
    const allTemperatures = days.flat();
    const sum = allTemperatures.reduce((acc, temp) => acc + temp, 0);
    return (sum / allTemperatures.length).toFixed(2);
}

function weatherAdvice(day, expectedPrecipitation) {
    const averageTemp = averageTemperature(day);
    const isSunny = expectedPrecipitation === 'saulėta';
    const isCold = averageTemp < 0;
    const isWarm = averageTemp > 15;
    let advice = '';
    if (isSunny && isWarm) 
        advice += 'Pasitepti saulės kremu. ';
    if (!isSunny && !isCold)
        advice += 'Pasiimti skėtį. ';
    if (isCold) 
        advice += 'Užsidėti striukę. ';
    if (isCold && !isSunny) 
        advice += 'Pasiimti morką besmegeniui lipdyti. ';
    if (advice === '') 
        advice = 'Šiandienos oras eiti į lauką yra puikus.';
    return advice;
}
console.log('\n');
console.log('Vidutinė pirmadienio temperatūra:', averageTemperature(pirmadienis));
console.log('Aukščiausia pirmadienio temperatūra:', maxTemperature(pirmadienis));
console.log('Žemiausia pirmadienio temperatūra:', minTemperature(pirmadienis));
console.log('\n');
console.log('Vidutinė antradienio temperatūra:', averageTemperature(antradienis));
console.log('Aukščiausia antradienio temperatūra:', maxTemperature(antradienis));
console.log('Žemiausia antradienio temperatūra:', minTemperature(antradienis));
console.log('\n');
console.log('Vidutinė trečiadienio temperatūra:', averageTemperature(trečiadienis));
console.log('Aukščiausia trečiadienio temperatūra:', maxTemperature(trečiadienis));
console.log('Žemiausia trečiadienio temperatūra:', minTemperature(trečiadienis));
console.log('\n');
console.log('Vidutinė ketvirtadienio temperatūra:', averageTemperature(ketvirtadienis));
console.log('Aukščiausia ketvirtadienio temperatūra:', maxTemperature(ketvirtadienis));
console.log('Žemiausia ketvirtadienio temperatūra:', minTemperature(ketvirtadienis));
console.log('\n');
console.log('Vidutinė penktadienio temperatūra:', averageTemperature(penktadienis));
console.log('Aukščiausia penktadienio temperatūra:', maxTemperature(penktadienis));
console.log('Žemiausia penktadienio temperatūra:', minTemperature(penktadienis));
console.log('\n');
console.log('Vidutinė šeštadienio temperatūra:', averageTemperature(šeštadienis));
console.log('Aukščiausia šeštadienio temperatūra:', maxTemperature(šeštadienis));
console.log('Žemiausia šeštadienio temperatūra:', minTemperature(šeštadienis));
console.log('\n');
console.log('Vidutinė sekmadienio temperatūra:', averageTemperature(sekmadienis));
console.log('Aukščiausia sekmadienio temperatūra:', maxTemperature(sekmadienis));
console.log('Žemiausia sekmadienio temperatūra:', minTemperature(sekmadienis));
console.log('\n');
console.log(lowestAndHighestTemperatureDay([pirmadienis, antradienis, trečiadienis, ketvirtadienis, penktadienis, šeštadienis, sekmadienis]));
console.log('\n');
console.log('Vidutinė savaitės temperatūra:', averageWeekTemperature([pirmadienis, antradienis, trečiadienis, ketvirtadienis, penktadienis, šeštadienis, sekmadienis]));
console.log('\n');
console.log('Pirmadienio orų patarimas, kai saulėta: ', weatherAdvice(pirmadienis, 'saulėta'));
console.log('Antradienio orų patarimas, kai debesuota: ', weatherAdvice(antradienis, 'debesuota'));
console.log('Trečiadienio orų patarimas, kai saulėta: ', weatherAdvice(trečiadienis, 'saulėta'));
console.log('Ketvirtadienio orų patarimas, kai debesuota: ', weatherAdvice(ketvirtadienis, 'debesuota'));
console.log('Penktadienio orų patarimas, kai saulėta: ', weatherAdvice(penktadienis, 'saulėta'));
console.log('Šeštadienio orų patarimas, kai debesuota: ', weatherAdvice(šeštadienis, 'debesuota'));
console.log('Sekmadienio orų patarimas, kai saulėta: ', weatherAdvice(sekmadienis, 'saulėta'));
console.log('\n');
console.log('Pirmadienio orų patarimas, kai debesuota: ', weatherAdvice(pirmadienis, 'debesuota'));
console.log('Antradienio orų patarimas, kai saulėta: ', weatherAdvice(antradienis, 'saulėta'));
console.log('Trečiadienio orų patarimas, kai debesuota: ', weatherAdvice(trečiadienis, 'debesuota'));
console.log('Ketvirtadienio orų patarimas, kai saulėta: ', weatherAdvice(ketvirtadienis, 'saulėta'));
console.log('Penktadienio orų patarimas, kai debesuota: ', weatherAdvice(penktadienis, 'debesuota'));
console.log('Šeštadienio orų patarimas, kai saulėta: ', weatherAdvice(šeštadienis, 'saulėta'));
console.log('Sekmadienio orų patarimas, kai debesuota: ', weatherAdvice(sekmadienis, 'debesuota'));
console.log('\n');