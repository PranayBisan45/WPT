function test(choice,greeting){
    function indian(name){
        console.log(greeting)
        console.log("ram ram",name)
    }
    function US(name){
        console.log("Hello",name)
    }
    switch(choice){
        case 1:return indian;break;
        case 2:return US;break;
        case 3:return (name)=>{console.log("Hola",name)};
    }
}
let rv = test(1,"good morning")
console.log(typeof(rv))
rv("amit")
rv("nisha")