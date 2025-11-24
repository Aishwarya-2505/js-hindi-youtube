// here in js the dates are ther eform  jan 1 1970 UTC (the epoch)

let mydate1 =Date()
console.log(mydate1);

let mydate2 =Date()
console.log(mydate2.toString());
// ctrl + space to see more features 


let mydate =new Date()
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreatedate =new Date(2025,0,23)
console.log(mycreatedate.toDateString());

let mycreatedate1 =new Date(2025,0,23,5,3)
console.log(mycreatedate1.toDateString());

let mycreatedate2 =new Date(2025,0,23,5,3)
console.log(mycreatedate2.toLocaleString());

let createdate = new Date ("01-14-2025")

let mytimestamp = Date.now()

console.log(mytimestamp);
// and see ss in phone because there are more 