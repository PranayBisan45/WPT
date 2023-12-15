function counterfactory(seed){
    let cnt=seed
    function incrementor(){
        return ++cnt;
    }
    return incrementor
}
let incr=counterfactory(100)
console.log(incr(),incr(),incr())