//create a map
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// console.log(fruits);
//using the set method
// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// console.log(fruits);
// fruits.set("apples",600);
// console.log(fruits);
// console.log(fruits.get("bananas"));
// console.log(typeof fruits);
// console.log(fruits.size);
// //fruits.delete("apples");
// console.log(fruits);
// fruits.clear();
// console.log(fruits);

//Map.has()

//console.log(fruits.has("apples"));

//Map.forEach()
// let text="";
// fruits.forEach(function(value,key){
//     text += key+' = ' + value + " ";
// })
// console.log(text);

//Map.entries
// let text="";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);

//Map.keys
// let text="";
// for(const x of fruits.keys()){
//     text += x+" ";
// }
// console.log(text);

//Map.values()
// let text="";
// for(const x of fruits.values()){
//     text += x+" ";
// }
// console.log(text);

// let total=0;
// for(const x of fruits.values()){
//     total += x;
// }
//console.log(total);

//Objects
// const apples={name: 'Apples'};
// const bananas={name: 'Bananas'};
// const oranges={name: 'Oranges'};
// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// console.log(fruits.get("apples"));

//JavaScript Destructuring
// const person={
//     firstName: "Sana",
//     lastName: "Saifi",
//     age:20
// };
// let{firstName,age,lastName}=person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);

//Desstructuring is not destructive
//Destructuring does not change the original object
// const person={
//     firstName: "Sana",
//     lastName: "Saifi",
//     age:20
// };
// let{firstName,age,lastName,country="India"}=person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(country);

//Alias
const person={
    firstName: "Sana",
    lastName: "Saifi",
    age:20
};
let{lastName: name}=person;
console.log(name);