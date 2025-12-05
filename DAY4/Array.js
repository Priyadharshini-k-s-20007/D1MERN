/* const fruits=['apple','banana'];
const newLenght=fruits.push('orange'); //add at last
console.log(fruits); 
console.log(newLenght); */
/* 
const fruits=['apple','banana'];
const newLenght=fruits.unshift('orange'); //add at first
console.log(fruits);
console.log(newLenght);
 */

/* const fruits=['apple','banana'];
const newLenght=fruits.pop();  //remove at last
console.log(fruits);
console.log(newLenght); */

/* const fruits=['apple','banana'];
const newLenght=fruits.shift();  //remove at first
console.log(fruits);
console.log(newLenght); */

console.log("---Slicing---");
let fruits=["Apple","orange","Mango","kiwi","grape"];
//extract from 0 to 4
let sliced=fruits.slice(0,4);
console.log(sliced);  
console.log(fruits);  //no change in original

//negative indices count from the end
let lasttwo=fruits.slice(-2);
console.log(lasttwo);
//find
//returns first found 
let number=[1,4,7,12,15];
//find number >10
let found=number.find(num => num >10);
console.log(found); 

let num=[1,2,3,4,5,6];
//find even numbers
let even=num.find(num=> num%2==0);
console.log(even);

const fruit=["Banana","Orange","Apple","Mango"];
let length=fruit.find(name=>name.lenght>5);
console.log(length);

//map
let nums=[1,3,4,5,6];
let double=nums.map(n=>n*2);
console.log(nums);
console.log(double);
 
let a=nums.map(num=>num>10);
console.log(a);


let prices=[200,300];
let add100=prices.map(n=>n+100);
console.log(add100);

let names=["Lucus","Mike","Will","Steve","Dustin"];
let mr=names.map(n=>"Mr."+n);
console.log(names);
console.log(mr);

//filter
const num1=[1,2,3,4,5,6];
//let filt=num1.filter(n=>n>5);
console.log(num1);
console.log(num1.filter(n=>n>5));


let student=[
    { name: "Pranavi", age: 21, grade: "A" },
    { name: "Ragavi", age: 22, grade: "B" },
    { name: "Priya", age: 21, grade: "A" }
];
let name2=student.filter(f=>f.age>21).map(n=>n.name);
console.log(name2);

//for all
//for each
//for in
let name1=["A","B","C"];
name1.forEach(n=>{
    console.log("Hello"+n);
    
});


//loop
const person={
    name:"Moni",
    age:19,
    city:"Chennai" , 
};
for(let key in person){
console.log(key,person[key]);
}

const colors1=["red","green","blue"];
for(let  f of colors1){
    console.log(f);
} 

names.forEach(n=>{
    console.log("Hello "+ n);  
});

//reduce
let total=num1.reduce((sum,current)=>sum+current,0);
console.log(total);


