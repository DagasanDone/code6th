/*
Create a function which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted numbers in ascending and descending order 

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];

// let result = arrCase1.filter(sortAges => sortAges.includes('string', 'numbers', 'boolean' ));

// function sortAges(arrCase1){
//   arrCase1.sort();

// }
// console.log(arrCase1.sort());
// arrCase1.pop();
// arrCase1.pop();
// console.log(arrCase1.sort());


// function  sortAges(arr){
// let sortArr = [];
//   for(let i= 0 ; i < arr.length ; i++){
//     if(typeof arr[i] === "number"){
//     sortArr.push(arr[i]) ;
//     }

//   }
// return sortArr.sort((a, b) => a - b) ;
// }
// console.log(sortAges(arrCase1));


// function  sortAges(arr){
//   let sortArr = [];
//     arr.forEach(element => {
//       if(typeof element === "number"){
//         sortArr.push(element) ;
//         }
//     })
//     return sortArr.sort((a, b) => a - b) ;
//     }
//   console.log(sortAges(arrCase1));

// function  sortAges(arr){
//     return arr.filter(element => {
//       if(typeof element === "number"){
//         return true;
//         }
//     })
//     }
//   console.log(sortAges(arrCase1).sort((a, b) => a - b));

  function  sortAges(arr){
    return arr.filter(element => typeof element === "number")  }
  console.log(sortAges(arrCase1).sort((a, b) => a - b));




/* ======= TESTS ===== */
