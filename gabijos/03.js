/*
1. Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).
a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
km/h greičiu per y valandų
b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x
valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)
c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume
nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų.
Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia.
Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų
d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui:
geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame
paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o
taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri
pagal kelio sąlygas, nurodytą greitį ir duotus atstumus, parašytų kiek laiko
tektų važiuoti iki kiekvieno miesto.
Užduotį gaima padaryti ir su objektais. Tuomet galite nekurti sąrašų
*/

const prompt = require('prompt-sync')(); //svarbu

const cities = [
    { name: "Kaunas", distanceFromVilnius: 101 },
    { name: "Klaipeda", distanceFromVilnius: 310 },
    { name: "Šiauliai", distanceFromVilnius: 213 },
    { name: "Panevėžys", distanceFromVilnius: 136 },
    { name: "Alytus", distanceFromVilnius: 101 },
    { name: "Telšiai", distanceFromVilnius: 286 },
    { name: "Utena", distanceFromVilnius: 97 },
    { name: "Marijampolė", distanceFromVilnius: 137 },
    { name: "Visaginas", distanceFromVilnius: 152 },
    { name: "Druskininkai", distanceFromVilnius: 128 },
];

function howFarWeGo(speed, time) {
    return speed * time;
}

function ifWeGetToCityThroughTime(city, speed, time, initialTime) {
    if (speed <= 0 || speed > 120)
        return 'greitis yra daugiau nei 120, arba mažiau nei 0, patikrinkite greitį';
    const distance = howFarWeGo(speed, time);
    if (initialTime !== undefined)
        if (time - initialTime < 0)
            return `Per ${time} valand${time === 1 ? 'ą' : time % 1 === 0 ? 'as' : 'os'} nepasieksime miesto ${city.name}, kai greitis yra ${speed} km/h.`;
    if (distance >= city.distanceFromVilnius)
        return `Per ${time} valand${time === 1 ? 'ą' : time % 1 === 0 ? 'as' : 'os'} pasieksime miestą ${city.name}, kai greitis yra ${speed} km/h.`;
    else
        return `Per ${time} valand${time === 1 ? 'ą' : time % 1 === 0 ? 'as' : 'os'} nepasieksime miesto ${city.name}, kai greitis yra ${speed} km/h.`;
}

function canWeReachCity(money, fuelPrice, burningRate, kmPerLiter, city) {
    const initialFuel = 30;
    const extraFuel = money / fuelPrice; // kiek papildomai galim įsipilti kuro už pinigus
    const totalFuel = initialFuel + extraFuel;
    const maxDistance = totalFuel * kmPerLiter;

    if (city.distanceFromVilnius <= maxDistance) {
        return `Galime pasiekti miestą ${city.name}, nes turime pakankamai kuro (${maxDistance.toFixed(2)} km su ${totalFuel.toFixed(2)} l).`;
    } else {
        return `Negalime pasiekti miesto ${city.name}, nes jis yra per toli (${city.distanceFromVilnius} km, galime nuvažiuoti tik ${maxDistance.toFixed(2)} km su ${totalFuel.toFixed(2)} l).`;
    }
}

function futherestCityWeCanReach(money, burningRate, kmPerLiter) {
    let maxDistance = 0;
    let farthestCity = null;
    for (const city of cities) {
        const distance = city.distanceFromVilnius;
        const maxTravelDistance = (money / burningRate) * kmPerLiter + 30 * kmPerLiter;
        if (distance <= maxTravelDistance && distance > maxDistance) {
            maxDistance = distance;
            farthestCity = city.name;
        }
    }
    console.log(farthestCity
        ? `Tolimiausias miestas, kurį galime pasiekti, yra ${farthestCity} (${maxDistance} km).`
        : 'Negalime pasiekti jokio miesto.');
    return farthestCity;
}

function roadCondition(roadCondition, speed, time, city) {
    let initialTime = city.distanceFromVilnius / speed;
    if (roadCondition === "taisomas")  initialTime = +((initialTime * 2).toFixed(2));
    else if (roadCondition === "blogas") initialTime = +((initialTime * 1.5).toFixed(2));
    else if (roadCondition === "geras") initialTime = +((initialTime).toFixed(2));
    else return 'Neteisinga kelio sąlyga';
    return ifWeGetToCityThroughTime(city, speed, time, initialTime);
}

function testCityWithRoads(city, speed, time) {
    const roadConditions = ["geras", "blogas", "taisomas"];
    roadConditions.forEach(condition => {
        console.log(`\n=== Kai kelias yra "${condition}" ===`);
        const result = roadCondition(condition, speed, time, city);
        console.log(result);
        console.log('--------------------------------');
    });
}

function testCity(city, speed, time, burningRate, kmPerLiter, money, fuelprice) {
    console.log(`Ar pasieksime ${city.name} per ${time} valand${time === 1 ? 'ą' : 'as'} su greičiu ${speed} km/h?`);
    console.log(ifWeGetToCityThroughTime(city, speed, time));
    console.log('--------------------------------');
    console.log(`Ar galime pasiekti miestą ${city.name} su biudžetu ${money} €, degalų sąnaudos ${+(burningRate.toFixed(2))} l/100km, greitis ${speed} km/h, km/l: ${+(kmPerLiter.toFixed(2))} ir kuro kaina yra ${fuelprice} eur/l?`);
    console.log(canWeReachCity(money, fuelprice, burningRate, kmPerLiter, city));
    console.log('--------------------------------');
    console.log(`Ar tai yra tolimiausias miestas, kurį galime pasiekti nuo Vilniaus?`);
    futherestCityWeCanReach(money, burningRate, speed, kmPerLiter);
    console.log('--------------------------------');
    console.log(`Skirtingų kelių sąlygos iki miesto ${city.name}:`);
    testCityWithRoads(city, speed, time);
    console.log(`\n\n`);
}

function getValidNumberInput(text) {
    while (true) {
        const input = prompt(text);
        const number = parseFloat(input.replace(",", ".")); // Pakeičia kablelį į tašką
        if (!isNaN(number)) return number;
        console.log("Neteisinga reikšmė. Įveskite skaičių.");
    }
}

function callTests() {
    console.log("\n");
    console.log("🛣️ Sveiki atvykę į miesto atstumų informacijos programą!");

    while (true) {
        console.log("\n📍 Pasirinkite miestą:");
        cities.forEach((city, index) => {
            console.log(`${index + 1}. ${city.name}`);
        });
        console.log("\n");
        const cityIndex = getValidNumberInput("Įveskite miesto numerį: ") - 1;
        if (cityIndex < 0 || cityIndex >= cities.length) {
            console.log("Neteisingas miesto numeris.");
            continue;
        }
        const city = cities[cityIndex];
        const speed = getValidNumberInput("Įveskite greitį (km/h): ");
        const time = getValidNumberInput("Įveskite laiką (valandomis): ");
        const burningRate = getValidNumberInput("Įveskite kuro sąnaudas (l/100km): ");
        const money = getValidNumberInput("Įveskite biudžetą (eurais): ");
        const fuelPrice = getValidNumberInput("Įveskite kuro kainą 1 litrui (eurais): ");

        const kmPerLiter = 100 / burningRate;

        console.log('\n📊 Skaičiavimai:\n');
        testCity(city, speed, time, burningRate, kmPerLiter, money, fuelPrice);

        const anotherTest = prompt("Ar norite išbandyti kitą miestą? (taip/ne): ").toLowerCase();
        if (anotherTest !== 'taip') {
            console.log("Ačiū, kad naudojotės mūsų programa! 🚗💨");
            break;
        }
    }
}

callTests();
