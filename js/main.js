console.log("Starting javascript...");

console.log("Basics!");
console.log("--Exercise 1--");

var myName = "Diego Morinigo";
console.log("Name: " + myName);

console.log("--Exercise 2--");

var myAge = 24;
console.log("Age: " + myAge);

console.log("--Exercise 3--");

var ignasiAge = 32;
var ageDiff = ignasiAge - myAge;
console.log("IgnasiAge - MyAge = " + ageDiff);

console.log("--Exercise 4--");

var age = 21;
if(myAge < age){
    console.log("I am not older than 21");
}
else {
    console.log("I am older 21");
}

console.log("--Exercise 5--");
if(myAge < ignasiAge){
    console.log("Not older");
}
else if (myAge = ignasiAge) {
    console.log("Equal");
}
else {
    console.log("Older");
}

console.log("Arrays");
console.log("--Exercise 1--");

function sort(array){
    var arraySorted = [];
    for(i = 0; i<array.length; i++){
        for(j = 0; j<array.lenth; j++){
            
        }
    }
    return arraySorted;
};

var array1 = ["ariel", "lean", "alan","nahuel","lucas","branco","rodri","ivan","gian"];
var arraySorted = sort(array1);
console.log(array1);
console.log(arraySorted);