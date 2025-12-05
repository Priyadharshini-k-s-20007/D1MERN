let a=25;
age=30;
console.log(age); 

var age1=35;
var age1=40;//redeclare is possible with var
age1=45;//reassignment is possible
console.log(age1);

const age2=45;//redeclare and reassignment both are not possible with const
//age2=50; //error
console.log(age2);

console.log("Hoisting");
let z;
console.log(z);
z=5;
console.log(z);

console.log("function scope--block scope");
function example(){
    if(1){
        var count=10;//function scope
        let count1=20;//block scope
    }
    console.log(count);
}
example();
