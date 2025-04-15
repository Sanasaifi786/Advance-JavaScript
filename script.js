// function sayHello(){
//        let you = prompt("What is your name");
//        console.log("Helllo",+you+ "!");
//     }
//     sayHello();
    // let varContainingFunction = function(){
    //    let varInFunction="I'm in a function";
    //    console.log("hi there!",varInFunction);
    //  };
    //  varContainingFunction();

// function tester(para1,para2){
//     return para1+" "+para2;
// }
// const arg1="argument 1";
// const arg2="argument 2";
// console.log(tester(arg1,arg2));

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let x=parseInt(prompt("enter the number"));
// let y=parseInt(prompt("enter the number"));
// addTwoNumbers(x,y);

// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers(4);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// addTwoNumbers(1,2,3,4);

//Arrow functions are great for sending funtions around as parameters and using shorter notation 

// let doingArrowStuff = x=>console.log(x);
// doingArrowStuff("hello");

// let addTwoNumbers=(x,y)=>console.log(x+y);
// addTwoNumbers(5,5);

// const arr=["squirrel","alpaca","buddy"];
// arr.forEach(e=> console.log(e));

// let spread=["so","much","fun"];
// let message=["javascript","is",...spread, "and","very"];
// console.log(message);

// function addTwoNumbers(x,y){
//          console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addTwoNumbers(x,y,z,a){
//        console.log(x+y+z+a);
// }
// let arr1=[5,9];
// let arr2=[6,7];
// addTwoNumbers(...arr1,...arr2)

// function someFuntion(para1,...para2){
//     console.log(para1,para2);
// }
// someFuntion("hi","there!","how are you?"); 

//Returning funtion values
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let result=addTwoNumbers(4,5);
// console.log(result);

// let addTwoNumbers=(x,y)=>{
//     console.log(x+y);
// }
// addTwoNumbers(4,5);

// function addTwoNumbers(x,y){
//     return x+y;
// }
// let resultArr=[];
// for(let i=0; i<10; i++)
// {
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

//Local variables in function
// function testAvailability(x){
//     console.log("available here:", x);
// }
// testAvailability("hi!");
// console.log("not available here:",x);

// function testAvailability(){
//     let y="local variable!";
//     console.log("available here:", y);
// }
// testAvailability();
// console.log("not available here:",y);

// function testAvailability(){
//     let y="I'll return!"
//     console.log("available here:", y);
//     return y;
// }
// let z=testAvailability();
// console.log("outside the function:",z);
// console.log("not available here:",y);

//let vs var variable
// function doingStuff()
// {
//     if(true)
//     {
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff()
// {
//     if(true)
//     {
//         console.log(x)
//         let x="local";
//     }
// }
// doingStuff();

//const scope
// function doingStuff()
// {
//     if(true)
//     {
//         const x="local";
//     }
//     console.log(x);
// }
// doingStuff();

//global variable
// let globalVar="Accessible everywhere!";
// console.log("outside funtion:",globalVar);
// function creationNewScope(x)
// {
//     console.log("access to global vars inside funtion.",globalVar);
// }
// creationNewScope("some parameter");
// console.log("still available:",globalVar);

// let x="global";
// function doingStuff()
// {
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x="global";
// function doingStuff(x)
// {
//     console.log(x);
// }
// doingStuff("param");

// function confuseReader()
// {
//     x="guess my scope...";
//     console.log("Inside the funtion:",x);
// }
// confuseReader()
// console.log("outside of function:",x);

//Invoked function
// (function(){
//     console.log("IIFE");
// }
// )();

// (function(x,y){
//     console.log(x+y);
// }
// )(4,5);

// (()=>{
//     console.log("run right away");
// })();

//Recursive funtions
// function getRecursive(nr){
//     if(nr>0){
//         getRecursive(--nr);
//     }
// console.log(nr);
// }
//  getRecursive(3);

// function logRecursive(nr){
//     console.log("started function",nr);
//     if(nr>0)
//     {
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("done with recursive");
//     }
//     console.log("ended function",nr);
// }
// logRecursive(3);

//The performance of recursion is slightly worse than the performance of regular itration using a loop. so if this 

//Nested function
// function doOuterFunctionStuff(nr)
// {
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variable",nr)
//     }
// }
// doOuterFunctionStuff(3);

//Anonymous functions - like passing in functions as parameters.the concept adds another abstruct layer to coding. this concept is called as callsback.
//Function Callbacks- here is an example  of passing
// let functionVariable=function(){
//     console.log("not so secret through");
// };
// functionVariable();
// function doFlexibleStuff(executesStuff){
//     executesStuff();
//     console.log("Inside doFlexibleStufffunction");
// }
// doFlexibleStuff(functionVariable);

//In javascript there are many built in functions as you may know by now. one of them is the setTimeout()function.It is a very special function that is executing a certain function after a specified amount of time that it will wait first.
// let youGotThis=function()
// {
//     console.log("you are doing really well,keep coding");
// };
// //setTimeout(youGotThis,1000);
// setInterval(youGotThis,1000);

// let testFunction=function(){
//     console.log("hello");
// }();

// (function(){
//     console.log("welcome");
// })();
// (function(){
//     let firstName="Laurance";
// })();
// let result=(function(){
//     let firstName="Laurance";
//     return firstName;
// })();
// console.log(result);
// (function (firstName){
//     console.log("My name is",firstName);
// })("Laurance");

var addFive1=function addFive1(num){
    return num+2;
};
let addFive2=(num)=>num+2;
console.log(addFive1(14));