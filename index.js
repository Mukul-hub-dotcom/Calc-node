var {add, sub,mult,divide,random}=require('./oper.js')
var a=+process.argv[3]
var b=+process.argv[4]
var d=process.argv[2]

if(d=="add"){
add(a,b)
}
if(d=="sub"){
    sub(a,b)
    }
if(d=="mult"){
   mult(a,b)
}
if(d=="divide"){
    divide(a,b)
    }
if(d=="random"){
    random(a,b)
    }
    

