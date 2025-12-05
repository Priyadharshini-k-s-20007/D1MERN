
function greet(){
    console.log("Hello,this is function decleration");
}
greet();
console.log("---Hoisting---");

//can be called before declaring due to hoisting
sayhello();
function sayhello(){
    console.log("Hello from Hiosting");
    
}
//Function expression->named,anonymous
console.log("---Function Expression---");

const greeExpr=function(){
    console.log("Hello this is function Expression");
    
};
greeExpr();//call after declaration

const greetNamed=function greetings(){
    console.log("Hello this is named function Expression");
    
};
greetNamed();


//call back function
console.log("---CallBack function---");//fn passed as a argument to anither fn
function process(callback){
    console.log("Processing...");
    callback(); //calling the demo
}
function demo(){
    console.log("Task completed");
}
process(demo);//passing the demo fn as argument


console.log("---Higher Order Function---");
function higherOrder(func){
    console.log("Calling the passed function");
    func();   
}
function sayHi()
{
    console.log("Hi from call back");   
}
higherOrder(sayHi);


//Normal function
const greet1=function(name){
    return "Hello "+name;
}
//Arrow function
console.log("---Arrow Function---");
const greetArrows = (name)=>{
    return "Hello "+name;
};
console.log(greet1("Max"));
console.log(greetArrows("Max"));
const add=(a,b)=>a+b;
console.log(add(5,6));



