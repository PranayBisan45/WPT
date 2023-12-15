let obj={  fname:"Dnyanendra",
            lname:"Borase",
            degree:"Btech",
            address:{
                area:"Shahada",
                city:"NDB",
                state:"MH",
                pin:"425409"
            },
            skills:["c/c++","java","html","css","js"],
            show:function(){
                console.log(this.fname,this.lname)
            }
        } 
//console.log(obj.fname,obj.lname)
//console.log(obj)
// console.log(obj.address.city)
// console.log(obj.skills[0])
//ANOTHER WAY to access properties  
// console.log(obj["fname"])
// console.log(obj["address"]["city"])
// console.log(obj["address"].pin)
//obj.show()
// console.log(typeof(obj.show))
// console.log(typeof(obj))
let rv = JSON.stringify(obj)
console.log(typeof(rv))
console.log(rv.fname)
let o =JSON.parse(rv)
console.log(typeof(o), o.fname)


