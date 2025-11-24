//for 
for (let i=0;i<=10;i++) {
//    const element=i
    console.log(i)
}
for (let i=0;i<=10;i++) {
   const element=i
    console.log(i)
}
//both gives same output
for (let i=0;i<=10;i++) {
   const element=i
   if(element==5){
    console.log("5 is the best");
    
   }
    console.log(element)
}
for (let i = 0; i <=10; i++) {
console.log( `outer looop value ${i}`);
for (let j = 0; j <=10; j++) {
    console.log(`inner loop value ${j} and inner loop ${i}`);
    
}
    
}
let arr=["flash","batman","superman"]
for (let i=0;i<arr.length;i++) {
    const element =arr[i]
    console.log(element);
}

//break and continue
for (let index = 1; index < 10; index++) {
    if (index==5) {
        console.log(`detected 5`);
        break;
    }
console.log(`value of i is ${index}`);
    
}


for (let index = 1; index < 10; index++) {
    if (index==5) {
        console.log(`detected 5`);
        continue;
    }
console.log(`value of i is ${index}`);
    
}