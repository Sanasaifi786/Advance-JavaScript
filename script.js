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
// let message=["javascript","is", ...spread, "and","very"];
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

function someFuntion(para1,...para2){
    console.log(para1,para2);
}
someFuntion("hi","there!","how are you?");