console.log("first");
setTimeout(()=>{
    console.log("This run after");
    
},5000)
console.log("end");


setTimeout(()=>{
    console.log("Made tea");

    setTimeout(()=>{
    console.log("Tosted Bread");
    
    setTimeout(()=>{
    console.log("Fried Eggr");
    
    },5000);
  },5000);
},5000);


//resolve->.then()
//reject -> .catch()
let iceCreamPromise=new Promise((resolve,reject) => {
let iceCreamReady=false;
if(iceCreamReady){
    resolve("🍦Ice cream is ready");
}
else{
    reject("💩 No ice cream today");
}
});

iceCreamPromise
 .then((message)=>{
 console.log("yay"+message);
 
 })
 .catch((error)=>{
    console.log("Opps"+error);
    
 });


//await
let icecreamPromise=new Promise((resolve,reject)=>{
    let icecreamReady=false;
    if(icecreamReady){
        resolve("Ice Cream is ready");
    }
    else{
        reject ("No ice cream today");
    }
});
async function getIceCream(){
    try {message =await icecreamPromise;
    console.log("Yay "+message);
}catch(error){
console.log("Oops! "+error);
}
}
getIceCream();

const [a,b,c]=[10,20,30];
console.log(a);
console.log(b);
console.log(c);


const [first, ...rest]=[1,2,3,4,5];
console.log(first);
console.log(rest);

/* 
const {name,age}=user;
console.log(name);
console.log(age);
 */

function greet({name,age}){
    console.log(`Hello ${name},you are ${age}`);
    
}
greet({
    name:"Saddie",
    age:22

});