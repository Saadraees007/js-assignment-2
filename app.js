var a = 10
var b = 60
var c = 50



if(a == b){
  console.log ( "A is equal to B");
}else if (b < c ) {
    console.log("B is less than C");
}
else if (a < c ) {
    console.log("A is less than C");
}


var a = 10
var b = 20
var allowed = true

if(a == b) {
if (allowed == true) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}
}

if(a == b && allowed == true) {
    console.log( "Not Allowed");
}
if (a == b || allowed == true) {
    console.log("Allowed")
}





 var urdu = +prompt("Enter urdu marks")
 var math = +prompt("Enter maths  marks")
 var sci = +prompt("Enter sci  marks")
 var pst = +prompt("Enter pst  marks")
 var eng = +prompt("Enter eng  marks")
 var obtainedmarks = (urdu+math+sci+pst+eng)
 console.log (obtainedmarks)
 var per = (obtainedmarks/500)*100
 console.log(per)

 
var food = [ "handi", "malai boti", "karhai", "chatni roti"]
 
food[10] = "allu bhari roti"
console.log(food.length)