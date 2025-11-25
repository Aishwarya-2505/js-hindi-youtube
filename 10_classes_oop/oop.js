const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
        // return this

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

   
}

// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false)
// console.log(userOne) // override useronr from usertwo but if we use new like in 37 adn 38
const userOne = new User("hitesh", 12, true) //implicitly return when u write this or not in line 25
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne);
console.log(userTwo); 

