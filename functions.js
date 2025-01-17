// funtions are the block of code that perform specific tasks, can be invoked anytime

function myfnc()
{
    console.log("Hello, World!");
    console.log("First fnc")
}

// myfnc();
function myfnc1(msg)
{
    console.log(msg);
}
// myfnc1("I love JS")



function sum(a,b)
{
    console.log(a+b)
}
// sum(4,5)


function mul(a,b)
{
    m = a*b                   //local variables 
    return m ;
}
// multiply = mul(4,5)
// console.log(multiply)


// Arrow functions

// arrow functions are the shorthand version of the function, they are used to define small functions

const arrowSum = (a,b)=>{
    console.log(a+b);
}

// arrowSum(3,5)

const arrowMul = (a,b)=>{console.log(a*b);}

// arrowMul(4,5)

//forEach

arr = [1,4,7];

// arr.forEach((val)=>{
//     console.log(val*val);
// })

//map method

let newARR = arr.map((val)=>{return val**2})
console.log(newARR)