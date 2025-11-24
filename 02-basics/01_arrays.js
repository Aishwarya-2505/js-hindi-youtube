// read documentation also
const myarr =[0,1,2,3,4,5]
console.log(myarr[1]);
console.log(myarr["one"]); // not correct process
//deep (changing copy does not effect oroginal )and shallow (chnaging copy effects the original)
const myheros =["ish","tony","marvel"]
const myarr2 =new Array(1,2,3,4,5)
console.log(myarr2)

// array methods
myarr.push(6)
myarr.push(7)
myarr.pop()
myarr.unshift(9) // adds at starting
myarr.shift() //remove that
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(9));
console.log(myarr.indexOf(2));
const newarr =myarr.join()//bind and convert to string

console.log(myarr);
console.log(newarr);



//slice,splice
console.log("A",myarr);
const myn1 =myarr.slice(1,3)
console.log(myn1); // exclude last
console.log("B",myarr);

const myn2 =myarr.splice(1,3) //include last
console.log(myn2);
console.log("c",myarr);// aslo prints other numbers which are not splice 


