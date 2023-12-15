const x=10;
//x=20; //-->assighnment to constant variable is not allowed
console.log("x=",x)
var p=100
{
    //var p=200;
    let p=200;//p is local variable here so scope is limited
}
console.log("p=",p)//100
console.log(g)
var g=100
//let g=100 // Cannot access 'g' before initialization