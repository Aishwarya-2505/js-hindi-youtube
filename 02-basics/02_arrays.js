const marvel_heros =['thor','ironman','spiderman']
const dc_heros =['falsh','superman','batman']

// marvel_heros.push(dc_heros )
console.log(marvel_heros); /// like that we do means we only get 4 elemenst like array in array and even we do concat alos same situation 
marvel_heros.concat(dc_heros )
console.log(marvel_heros);//but store in other var and print then its good
const hero = marvel_heros.concat(dc_heros )
console.log(hero);
console.log(hero.length);
///but using spread makes easy
const all_hero=[...marvel_heros ,...dc_heros]
console.log(all_hero)
const another_array =[1,2,3,[5,6,7],3,4,[2,3,4,[2,3,4],4]] // flat we cant do this with spread
const realnum=another_array.flat(Infinity)
console.log(realnum);


console.log(Array.isArray("ish"));
console.log(Array.from("ishu"));
console.log(Array.from({name: "ishu"})); //interesting beacsue it cant access

const score1=200  //can use let insted of const tpp
const score2=30
const score3 = 40
console.log(Array.of(score1,score2,score3));
