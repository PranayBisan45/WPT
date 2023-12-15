function makeadd(x){
    return function(y){
        return x+y;
    }
}
const add1=makeadd(1);
const add2=makeadd(2);
const add3=makeadd(3);
console.log(add1(10))
console.log(add2(10))
console.log(add3(10))