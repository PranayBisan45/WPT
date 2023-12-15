function person(n,c){
    this.name=n
    this.city=c
    this.show=function(){
        console.log( this.name)
    }
}
let p=new person ("Dnyanendra","Dhule")
p.show()

