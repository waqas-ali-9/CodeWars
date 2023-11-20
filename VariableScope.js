// function run() {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve(1);
//       }, 2000);
//     });
//   }
  
//   async function data() {
//     const result = await run();
//     console.log(result);
//   }
  

//   async function test(){
//     const result=await run();
//     console.log(result)
//     console.log("HEHE")
//     const data=await run();
//     console.log(data)
//   }




//   test();

// function run(){
//   console.log ("before timeout")
//   setTimeout(() => {
//     console.log ("inside timeout")    
//   }, 2000);
//   console.log ("after timeout")
// }


// run();


// function demoBlockScope() {
//   if (true) {
//     let x = 10; // Block-scoped variable
//     const y = 5; // Block-scoped constant
//     var b=30;
//     console.log(x); // Output: 10
//   }

//   console.log(b); 
//   // console.log(x); 
//   // console.log(y); 
// }

// demoBlockScope()


function outerFunction() {
  function innerFunction() {    
  let outerVariable = 'I am from the outer function';
    console.log(outerVariable); // innerFunction has access to outerVariable
  }
  
  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: "I am from the outer function"


testvariable="test";
console.log(testvariable);


// let value=outerFunction();
// console.log(value);