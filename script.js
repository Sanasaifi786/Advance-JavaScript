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
//     console.log(nr);
//     if(nr>0){
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

function logRecursive(nr){
    console.log("started function",nr);
    if(nr>0)
    {
        logRecursive(nr-1);
    }
    else{
        console.log("done with recursive");
    }
    console.log("ended function",nr);
}
logRecursive(3);