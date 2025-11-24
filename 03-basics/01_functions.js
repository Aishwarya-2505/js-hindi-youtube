function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(3, 5) //you can check (3,"4") or (3,"a") or (3,null)
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))


function calculateCartPrice(va1,val2,...num1) { //... is spread and also rest but depend on the usecase it chnages so here it is rest 
    return num1
}
console.log (calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({ //direct pass the object not like first create and then pass 
    username: "sam",
    price: 399
})

const mynewarray = [200, 400, 100, 600]

function returnSecondValue(mynewarray){ //in bracket we can keep any name
    return mynewarray[1]
}
// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,100,600])); //we can directly pass the values  also 
