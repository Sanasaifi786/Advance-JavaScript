//This development reduced the design advancements in software development.
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// } 
// let obj =new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

//This keyword refers to the object it belongs to so it is the first property of the instance of ClassName.

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript",2.4,"brown","chihuahua");
// console.log(dog.dogName,"is a",dog.breed, "and weights", dog.weight, "kg.");

//Classes- class is the conversion to start class names with a capital letter
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p = new Person("Sana","Saifi");
// console.log("Hi",p.firstname);
// console.log("Hi",p.firstname,p.lastname);

// class Person{
//         constructor(firstname,lastname="Saifi"){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
// }
// let p = new Person("Sana");
// console.log("Hi",p.firstname);
// console.log("Hi",p.firstname,p.lastname);

//Function on a class are called methods.when defining these methods we don't use the function keyword.we start with the name.
class Person{
            constructor(firstname,lastname="Saifi"){
                this.firstname=firstname;
                this.lastname=lastname;
        }
greet(){
    console.log("Hi there! I'm", this.firstname);
}
}
let p = new Person("Sana","Saifi");
console.log("Hi",p.firstname);
console.log("Hi",p.firstname,p.lastname);
p.greet();

