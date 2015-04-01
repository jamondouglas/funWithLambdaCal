//go from finding the total cost of n items
var R = require('ramda');

//You would need to rewrite this if any parameter changed.
console.log('5 candies at 5 cents each cost: '+ 5*5+' cents.');
console.log('Each piece of candy cost: '+100/50);

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


function findCostPerCandyWith100Cent(numOfCandies){
	return (100/numOfCandies);
}

function findCostPerCandy(money, numOfCandies){
	return money/numOfCandies;
}
function getCandyOperation(op){
	return R.eq('*',op);
}
function performCostOperationsOnCandies(op, valA, valB){
	return R.ifElse(getCandyOperation(op),findCostofCandies(valA, valB), findCostPerCandy(valA,valB));
}


var performCostOperation = R.cond(
	[R.eq('*'), function(op, valA, valB){return findCostofCandies(valA, valB);}],
	[R.eq('/'), function(op, valA, valB){return findCostPerCandy(valA,valB);}]
);

var printCandyofKnownCost = R.compose(console.log,makeCandyCostStr,findCost5CentCandies);
var printCandyCost = R.compose(console.log, makeCandyCostStr,findCostofCandies);
var printPerCandyCostWithKnownInputs = R.compose(console.log,makeCandyCostStr, findCostPerCandyWith100Cent);
var printPerCandyCostUnknownInputs = R.compose(console.log, makeCandyCostStr,findCostPerCandy);
var printCandyOps = R.compose(console.log,makeCandyCostStr,performCostOperation);
printCandyofKnownCost(20);
printCandyCost(100, 5);
printPerCandyCostWithKnownInputs(50);
printPerCandyCostUnknownInputs(1000, 50);
printCandyOps('/', 10000, 20);
