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
// const person={
//     firstName: "Sana",
//     lastName: "Saifi",
//     age:20
// };
// let{lastName: name}=person;
// console.log(name);

//String Destructuring
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// const fruits=["Bananas","Oranges","Apples","Mangoes"];
//let[fruits1,fruits2]=fruits;
// console.log(fruits1,fruits2);
// let[fruits1,,,fruits2]=fruits;
// console.log(fruits1,fruits2);
// let{[0]:fruits1,[3]:fruits2}=fruits;
// console.log(fruits1,fruits2);

//Rest property=store all remaining value into new array
// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers;
// console.log(a,b,...rest);

//Destrcturing in Map
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

//swaping the two elements
// let firstName="sana";
// let lastName="saifi";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName,lastName);

//JavaScript Exponential
// let x=5;
// let z=x**2
// console.log(z);
// let p=Math.pow(x,2);
// console.log(p);
// console.log(x**=2);

//Array includes()=it gives boolean value
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// console.log(fruits.includes("Mangoes"));
// console.log(fruits.includes("Bananas",3));

//Trailing commas=it gives the teminal point and only use one comma
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const person={
//     firstName: "Sana",
//     lastName: "Saifi",
//     age:20,
// }
// console.log(person);

//example of sparsh matrices
// const person={
//     firstName: "Sana",
//     ,
//     age:20,
// }
// console.log(person);