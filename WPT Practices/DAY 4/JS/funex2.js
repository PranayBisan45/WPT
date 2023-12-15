function dojob(f1){
    for(var i=0;i<5;i++){
        f1()
    }
}
dojob(function(){console.log("IET")})
dojob(()=>{console.log("cdac")})
function test(){
    console.log("IETTTTTTT CDACCCCCC")
}
dojob(test)