function forLoop(array){
 for (let i = 0; i <= 25; i++){
  /////  if (i===1){ 
     // array.push("I am 1 strange loop.");
      
 //}else array.push(`I am ${i} strange loops.`);
 array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
   
 }
 
}

function whileLoop(n){
  while (n > 0){
    console.log(--n);
}
  return "done";
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 

function doWhileLoop(num){
  do {
    console.log("I run once regardless.");
  } while (num>0);
  }
}