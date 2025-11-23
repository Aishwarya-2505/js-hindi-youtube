let score0 = 33 
//  down 2 lines are different ways to know the datatype and also we should find type becuse we know that it is int but when we do backend and here problem comes so check types 
console.log(typeof (score0))
console.log(typeof score0)

let score = "33" 
let valueInNumber0 = Number(score)
console.log(typeof valueInNumber0)
console.log(valueInNumber0);

let score1 = "3jh3" 
let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
console.log(valueInNumber); //output is NaN which should not

let score2 = null 
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber1); 

let score3 = undefined 
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2)
console.log(valueInNumber2); 

let score4 = true
let valueInNumber3 = Number(score4)
console.log(typeof valueInNumber3)
console.log(valueInNumber3); 
//"33"=>33
//"3jh3"=>NaN
//true =>1 ; false=>0
let isloggedIn = 1
let booleanIsLoggedIn =Boolean(isloggedIn )
console.log(booleanIsLoggedIn);

let isloggedInn = ""
let booleanIsLoggedInn =Boolean(isloggedInn )
console.log(booleanIsLoggedInn);

let isloggedInnn = "ish"
let booleanIsLoggedInnn =Boolean(isloggedInnn )
console.log(booleanIsLoggedInnn);
// 1=>true; 0=>false
// ""=> false
// "ish"=>true

let somenumber = 10
let stringtonum = String(somenumber)
console.log(stringtonum);
console.log(typeof stringtonum)

