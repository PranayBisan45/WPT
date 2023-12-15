// let regex= /abc/
// let s="ovfioovfabc"
// let regex= /abc/i            //i used for ignore case
// let s="ovfioovfABC"

//matches a single char bet A-Z
// let regex= /[ABC]/
// let s = "Acbufbvui"

// let regex= /[a-cA-G]{4}/ //any char a-c or A-G
// let s="vabcvbbbb"

//possible matches
//India Prachi --yes 
//IGGGG , I123 , I ---no
// let regex= /^[A-Z][a-z]+/
// let s="Asbgd"

// let regex= /^[A-Z][a-z]*/
// let s="A"

// let regex= /[A-Za-z]+[0-9]{3}/
// let s="9Asbgd562fyyufuy56afbsgb"

// let regex= /[A-Za-z]+[0-9]{3}$/
// let s="9Asbgd562fyyufuy506"

// let regex= /[a-z]{2,3}\.com/
// let s="ainv.com"
// let regex= /[-_@#!$]{3}/
// let s="ainv.c!om@!#"
let rv= s.match(regex)
console.log(rv)