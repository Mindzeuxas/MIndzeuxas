/*So Easy: Price of Phone

Task
You work in a mobile phone store, your job is to determine the sales price of mobile phones. You need to ensure that at least 15% of the profit after each mobile phone is sold. For example: A phone's cost price is $100, its sales price should be $115.

An additional requirement: mobile phone sales price must be first rounded to an integer, then adjusted up so that the last digit is 5 or 0. For example: A phone's cost price is $120, after add profits 15%, the sales price should be $138, but the last digit is 8, so you need "ceil" it to $140.

You've got a list, it has the cost price of mobile phones that need to be sold:

iPhone 7 cost price: $800
Samsung note 7 cost price: $600
iPad pro cost price: $700
You need to generate a list of sales prices:

iPhone 7 sale price: $920
Samsung note 7 sale price: $690
iPad pro sale price: $805
*/
/*========================================================================================================================================================================================================================================================================
const chai = require('chai');
const expect = chai.expect;

describe("Basic Tests", function() {
  it("It should work for basic tests", function() {
    const cost1 = `\
iPhone 7 cost price: $800
Samsung note 7 cost price: $600
iPad pro cost price: $700`;
    const sale1 = `\
iPhone 7 sale price: $920
Samsung note 7 sale price: $690
iPad pro sale price: $805`;
    
    const userAnswer1 = salePrice(cost1);
    expect(userAnswer1).to.equal(sale1);

    const cost2 = `\
iPhone 7 cost price: $370
Samsung note 7 cost price: $670
iPad pro cost price: $770`;
    const sale2 = `\
iPhone 7 sale price: $430
Samsung note 7 sale price: $775
iPad pro sale price: $890`;
    
    const userAnswer2 = salePrice(cost2);
    expect(userAnswer2).to.equal(sale2);
  });
});


*/
function salePrice(cost){
    //coding and coding..
    let splitedCost = cost.split(/[$\n]/);
    let prices = splitedCost.filter((_, ind) => ind % 2 === 1).map(n => Math.ceil((Number(n) + Math.round(Number(n) * 0.15)) / 5) * 5);
    let newStringText = splitedCost.filter((_, index) => index % 2 === 0);
    let item; 
    let newStringArr = [];
    for(let i = 0; i < splitedCost.length / 2; i++)
    {
        item = newStringText[i] + "$" + prices[i];
        newStringArr.push(item);
    }
    return newStringArr.join('\n').replaceAll('cost', 'sale');
  }

  console.log(salePrice("iPhone 7 cost price: $800\nSamsung note 7 cost price: $600\niPad pro cost price: $700"));
  console.log(salePrice("iPhone 7 cost price: $370\nSamsung note 7 cost price: $670\niPad pro cost price: $770"));