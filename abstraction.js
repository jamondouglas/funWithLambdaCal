//go from finding the total cost of n items
var R = require('ramda');

//You would need to rewrite this if any parameter changed.
console.log('5 candies at 5 cents each cost: '+ 5*5+' cents.');

//Abstract the nums and place this into function.


function print(str){
	console.log(str);
	return undefined;
}

function makeCandyCostStr(num){
	return "Your candy will cost: "+num+" cents";
}

function findCost5CentCandies(numOfCandies){
	return numOfCandies * 5;
}

//more flexible
function findCostofCandies(numOfCandies, costOfCandies){
	return numOfCandies * costOfCandies;
}

console.log('Each piece of candy cost: '+100/50);

function findCostPerCandyWith100Cent(numOfCandies){
	return (100/numOfCandies);
}

var printCandyofKnownCost = R.compose(console.log,makeCandyCostStr,findCost5CentCandies);
var printCandyCost = R.compose(console.log, makeCandyCostStr,findCostofCandies);
var printPerCandyCost = R.compose(console.log,makeCandyCostStr, findCostPerCandyWith100Cent);
printCandyofKnownCost(20);
printCandyCost(100, 5);
printPerCandyCost(50);