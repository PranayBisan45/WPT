movie={
    name:"Animal",
    director:"Sandeep Reddy Vanga",
    cast:{
            hero:["Ranbir","Anil"],
            heroine:["Rashmika","Tripti"],
            villan:["Bobby","Asrar"],
            comedian:["upendra","shakti kapoor"]
         },
    Dateofrelease:"1-12-2023",
    Budget:"100 crore rs",
    Kids:"False"
}

console.log(movie.name)
console.log(movie["director"])
console.log(movie.cast.hero)
console.log(movie["cast"]["heroine"])
console.log(movie["cast"].villan)
console.log(movie["cast"]["comedian"])
console.log(movie.director ,"->", movie.Budget,"->", movie.Kids)
var totalCasts = 0;

for (var role in movie.cast) {
    if (Array.isArray(movie.cast[role])) {
        totalCasts += movie.cast[role].length;
       //console.log(totalCasts)2>4>6>8
    }
}
console.log("Total No of Casts =", totalCasts);
