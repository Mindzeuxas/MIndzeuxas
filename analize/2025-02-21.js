/**
 * Užduotis: "Miesto eismo analizė"
 * 
 * Jūsų tikslas - parašyti kelias funkcijas, kurios analizuos miesto transporto srautą.
 * Įsivaizduokite, kad turime duomenų apie įvairius miesto rajonus, jų populiacija ir eismo intensyvumą.
 * Turėsite apdoroti šiuos duomenis ir pateikti išvadas apie transporto srautą.
 */


/**
 * Turite masyvą, kuris reprezentuoja miesto rajonus ir jų populiaciją, transporto duomenis:
 * 
 * name - rajono pavadinimas
 * population - rajono gyventojų skaičius
 * traffic - masyvas, kuris parodo eismo intensyvumą (automobilių skaičius per valandą) kiekvieną savaitės dieną (pirmadienis - sekmadienis)
 */
const cityTraffic = [
    { name: "Senamiestis", population: 15000, traffic: [120, 85, 90, 70, 150, 200, 130] },
    { name: "Šnipiškės", population: 10000, traffic: [80, 60, 75, 95, 100, 120, 110] },
    { name: "Antakalnis", population: 20000, traffic: [100, 120, 140, 160, 180, 200, 220] },
    { name: "Žirmūnai", population: 25000, traffic: [200, 220, 250, 270, 300, 330, 350] },
    { name: "Lazdynai", population: 12000, traffic: [50, 70, 80, 90, 100, 120, 130] }
];


/**
 * [1] Vidutinis eismo srautas rajone
 * 
 * Sukurkite funkciją averageTraffic(region), kuri priima rajono objektą ir grąžina vidutinį eismo intensyvumą per savaitę.
 * 
 * Pvz.: averageTraffic(cityTraffic[0]) turėtų grąžinti 120.71 (suapvalinta iki dviejų skaičių po kablelio).
 */
function averageTraffic(obj)
{
    return Number((obj.traffic.reduce((a, b) => a + b)/obj.traffic.length).toFixed(2));
}

/**
 * [2] Rajonas su didžiausiu vidutiniu eismu
 * 
 * Parašykite funkciją busiestRegion(data), kuri priima miesto duomenų masyvą ir grąžina rajono pavadinimą, kuriame vidutinis eismo intensyvumas yra didžiausias.
 * 
 * Pvz.: busiestRegion(cityTraffic) turėtų grąžinti "Žirmūnai".
 */
function busiestRegion(arr)
{
    let maxAve = -Infinity;
    let maxAveInd = 0;
    for (let i = 0; i < arr.length; i++)
    {
        let itemAverTraff = averageTraffic(arr[i]);
        if (itemAverTraff > maxAve)
        {
            maxAve = itemAverTraff;
            maxAveInd = i;
        }
    }
    return arr[maxAveInd].name;
    //return arr.traffic.sort((a, b) => averageTraffic(b) - averageTraffic(a));
}

/**
 * [3] Eismo intensyvumas vienam gyventojui
 * 
 * Parašykite funkciją trafficPerPerson(region), kuri priima rajono objektą ir grąžina eismo srautą, tenkantį vienam gyventojui per savaitę.
 * 
 * Pvz.: trafficPerPerson(cityTraffic[0]) turi grąžinti 0.056 (suapvalinta iki trijų skaičių po kablelio).
 */

function trafficPerPerson(obj)
{
    return Number((obj.traffic.reduce((a, b) => a + b) / obj.population).toFixed(3));
}


/**
 * [4] Sugeneruoti savaitės eismo ataskaitą
 * 
 * Sukurkite funkciją generateTrafficReport(data), kuri priima miesto duomenų masyvą ir grąžina masyvą su tokiais objektais kiekvienam miesto rajonui:
 * {
 *      name: "Senamiestis",       // Rajono pavadinimas
 *      avgTraffic: 120.71,        // Vidutinis eismo srautas rajone
 *      bussiestDay: 200,          // Didžiausias fiksuotas eismo srautas kažkurią dieną
 *      trafficPerPerson: 0.056    // Eismo intensyvumas vienam gyventojui
 * }
 */
function generateTrafficReport(arr)
{
    const newArr = [];
    for (let i = 0; i < arr.length; i++)
    {
        const obj = {};
        obj.name = arr[i].name,
        obj.avgTraffic = averageTraffic(arr[i]);
        obj.bussiestDay = Math.max(...arr[i].traffic);
        obj.trafficPerPerson = trafficPerPerson(arr[i]);
        newArr.push(obj);
    }
    return newArr;
}

//=============================================================================================================================================================

/**
 * [EXTRA] Papildoma užduotis
 * 
 * Jei norite iššūkio, pridėkite funkciją findLeastBusyDay(data), kuri priima miesto duomenų masyvą ir nustato mažiausio eismo dieną visame mieste. Ji turėtų grąžinti savaitės dienos pavadinimą (pvz., "Pirmadienis").
 */
function findLeastBusyDay(arr)
{
    let minValue = Infinity; 
    let minValueIndex; 
    let minValueEntry = Infinity;
    for(let i = 0; i < arr.length; i++)
    {
        minValueEntry = Math.min(...arr[i].traffic); 
        if (minValueEntry < minValue)
        {
            minValue = minValueEntry; 
            minValueIndex = arr[i].traffic.indexOf(Math.min(...arr[i].traffic)); 
        }         
    }
   switch (minValueIndex)
   {
     case 0: return 'pirmadienis';
     case 1: return 'antradienis';
     case 2: return 'trečiadienis';
     case 3: return 'ketvirtadienis';
     case 4: return 'Penktadienis';
     case 5: return 'šeštadienis';
     case 6: return 'sekmadienis';
   } 
}

function findLeastBusyDay2(arr)
{
    let leastTrafficADay = [];
    let dayTraffic = [];
    let minValue = Infinity;
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr[i].traffic.length; j++)
        {
            dayTraffic[0] = j;
            dayTraffic[1] = arr[i].traffic[j];
            if (i === 0)
            leastTrafficADay.push([...dayTraffic]);
            else leastTrafficADay[j][1] += dayTraffic[1];
        }  
    }
    for (let i = 0; i < leastTrafficADay.length; i++)
    {
        if (minValue > leastTrafficADay[i][1])
        {
            minValue = leastTrafficADay[i][1];
            minIndex = leastTrafficADay[i][0];
        }      
    }
    switch (minIndex)
    {
      case 0: return 'pirmadienis';
      case 1: return 'antradienis';
      case 2: return 'trečiadienis';
      case 3: return 'ketvirtadienis';
      case 4: return 'Penktadienis';
      case 5: return 'šeštadienis';
      case 6: return 'sekmadienis';
    } 
}
//==================================================================================================================================================================
let arrN = generateTrafficReport(cityTraffic)

for (let i = 0; i < arrN.length; i++)
    console.table(arrN[i]);
console.log(`Mažiausiai užimta diena mieste: ${findLeastBusyDay2(cityTraffic)}`);
//==============================================================================================================================================================


