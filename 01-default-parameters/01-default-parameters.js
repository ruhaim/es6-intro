function multiply(x, y){
 var a = x || 1;
 var b = y || 1;
 return a*b;
}


function multiplyES6(x=4,y=2){
 return x*y;
}

console.log(multiplyES6())


