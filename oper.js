function add(a,b){
console.log(a+b) 
}
function sub(a,b){
    console.log(a-b)
}
function mult(a,b){
    console.log(a*b)
}
function divide(a,b){
    console.log(a/b)
}
function random(a,b) {  
   console.log(Math.floor(
      Math.random() * (b-a) + a
    ))
  }
module.exports={add, sub,mult,divide,random}