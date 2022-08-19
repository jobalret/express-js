
/*callback

"I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has 8*/

//  ==>
console.log("exuction start")
setTimeout(
    ()=>{
    
    console.log("alima ")}
,1000)
console.log("end")


 function first(callb,x){
    console.log('first function is exectuin')
    callb(x)
 }

 function alima(x){
    console.log(x)
    console.log('secnodn function exutin')
 }
 first(alima,"callback")