
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]  
function arrCountry(arr){ 
  for(let i=0; i<arr.length ; i++){
   arr[i]= [arr[i], arr[i].substring(0,3).toUpperCase(), arr[i].length];
  }
  return arr;
}
console.log(arrCountry(countries));





// Add "-" after every even number

const numbers = "315469781318158";

function num(str){
  let s= "" ;
for(let i= 0 ; i<str.length ; i++){
  if(parseInt(str[i]) % 2 === 0 && i !==str.length -1){
    s = s + str[i] + "-";
  
  }else{
s += str[i] ;
  }
}
  return s;
}
console.log(num("315469781318158"));

// Find odd numbers
 var arr = [5, 24, 122, 625, 3125, 15625];
 function oddNum(num){
   let arrN = [];
  for(let i =0 ; i < num.length ; i++){
     if(num[i] % 2 !== 0 ){
      arrN.push(num[i]) ;    
   }
}
for(let i =0 ; i<arrN.length ;i++){
arrN[i] = arrN[i] / 25 ;
}
return arrN;
 }
 console.log(oddNum(arr));