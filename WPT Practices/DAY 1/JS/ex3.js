x=1
if(x%2==0){
    console.log(x," is even")
}
else{
    console.log(x," is odd")
}
switch(x){
    case 1:console.log("One");break; //here if we write break in one line we use ;
    case 2: console.log("Two")
          break
    default:
        console.log("Number is not one or two")
}
    let a=0
    while(a++<10){
        console.log(a)
    }
    a=2
    do{
        console.log(a++)
    }while(a<=10)
    a=[1,2,3,4,5,6,7,8,9,10]
    for(let cnt=0;cnt<10;cnt++){
        console.log(a[cnt])
    }
    