//EXERCICE 1
console.log("FIRST EXERCICE");
let valFirst = [7,5,-12,6,32,18,14,-2];
let valSec = [-3,9,21,36,27,54,17,35];

let valMin = Math.min(...valFirst);
console.log("Smallest value = " + valMin);
let valMax = Math.max(...valSec);
console.log("Biggest value = "+valMax);
let valTotal = valMin+valMax
console.log("Total value = " +valTotal);

// EXERCICE 2
console.log("SECOND EXERCICE");
let floatBateau = 10.4;
console.log("This is the default value => "+floatBateau);
let couleBateau = Math.floor(floatBateau);
console.log("This is the rounded down value => "+couleBateau)
let voleBateau = Math.ceil(floatBateau);
console.log("This is the rounded up value => "+voleBateau);

//EXERCICE 3
console.log("THIRD EXERCICE");
let randomBig = Math.floor(Math.random()*51+50);
console.log("This is a random value between 50 and 100 => "+randomBig);
let randomSmall = Math.floor(Math.random()*2+0);
console.log("This is a random value between 0 and 1 => "+randomSmall);
let randomAverage = Math.floor(Math.random()*11+0);
console.log("This is a random value between 0 and 10 included => "+randomAverage);

//EXERCICE 4
let tableau = ["Goro","Johnny Cage","Kane","Liu Kang","Raiden","Reptil","Scorpion","Shang tsung","Sonya","Sub-Zero"];
let poney = Math.floor(Math.random()*(tableau.length+1)+0);
console.log(tableau.length);
console.log(tableau[poney]);
