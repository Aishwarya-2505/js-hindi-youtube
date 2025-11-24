//iife is used beacuse to get ride of global scope pollution (global scope varaible,or what ever declaration)
(function chai(){
    // named iiFE
    console.log(`DB CONNECTED`);
})();
//down one is simple iife or unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')