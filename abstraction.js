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

var printCandyCost = R.compose(console.log,makeCandyCostStr,findCost5CentCandies);

printCandyCost(20);