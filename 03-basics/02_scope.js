// {} this symbol comes in many situation like in object declaration and aslo in functions and if else so if it comes in functions or if else then called scope
// var c =300//global scope
d=90
if (true) {
    let a=10 //block scope
    const b =20
    var c= 40
    d=50
    console.log("inner: " , a);
    function addnum() {

    }
    
}

// console.log(a); // it gives error 
// console.log(b); // it gives error
console.log(c); //it dont give error because  it is varaible
console.log(d);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//global is different in brower console and here in node js here (important)



//nested scope now
// here inner can access outer beacuse it is global to it    
function one() {
    const username ="ish"
   // we can write function in function and also in if else and also in loop etc 
    function two () {
        const website ="youtube"
        console.log(username)
        
    }
    // console.log(website) // here it gives error so down one is not excuted beacuse lin by line so 
    two() //this will be executed 
}
one()

// inside if or for i can access var or nothing, but inside function I can’t access nothing & var & const
if (true ) {
    const username="ishu"
    if (username==="ishu") {
        const website ="youtube"
        console.log(username+website);
        
    }
    //console.log(website)
}

// console.log(username) //scope problem it gives error

//**********************interesting ******
console.log(addone(5))
//this executives 
function addone(num){
    return num + 1
}

//this do not executive cause we are acessing before declaring
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}