console.log("Starting javascript...");

console.log("---Basics---");
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

console.log("---Arrays---");

function mostrarElems(arrayIn) {
    var texto = "[";
    for(var i = 0; i < arrayIn.length; i++){
        texto += arrayIn[i];
        if(i != (arrayIn.length - 1)){
            texto += ";"
        }
        
    }
    texto += "]";
    return texto;
}
console.log("--Exercise 1--");

var arrayName = ["ariel", "lean", "alan","nahuel","lucas","branco","rodri","ivan","gian"];
console.log("array desordenado: " + mostrarElems(arrayName));
arrayName.sort();
console.log("array ordenado: " + mostrarElems(arrayName));
console.log("Primer elemento: " + arrayName[0]);
console.log("Ultimo elemento: " + arrayName[arrayName.length - 1]);

for(i = 0; i < arrayName.length; i++){
    console.log("Elemento " + i + ": " + arrayName[i]);
}

console.log("--Exercise 2--");
var arrayAge = [20, 19, 19, 18, 21, 28, 29, 23, 24];

console.log("Todos los numeros con while:");
var i = 0;
while(i < arrayAge.length){
    console.log("Pos " + i + " edad: " + arrayAge[i]);
    i++;
}

console.log("Todos los numeros pares con while:");
function esPar(number) {
    var resto = number%2;
    if(resto == 0){
        return true;
    }
    return false;
}

i = 0;
while(i < arrayAge.length){
    if(esPar(arrayAge[i])){
        console.log("Pos " + i + " edad: " + arrayAge[i]);
    }
    i++;
}

console.log("Todos los numeros pares con for:");
for(i = 0; i < arrayAge.length; i++){
    if(esPar(arrayAge[i])){
        console.log("Pos " + i + " edad: " + arrayAge[i]);
    }
}

console.log("--Exercise 3--");

function minimoDelArray(arrayIn){
    var minimo;
    for(var i = 0; i < arrayIn.length; i++){
        if(i == 0){
            minimo = arrayIn[i];
        }
        else if(arrayIn[i] < minimo){
            minimo = arrayIn[i];
        }
    }
    return minimo;
}

var arrayNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log(mostrarElems(arrayNumbers));
console.log("El minimo es: " + minimoDelArray(arrayNumbers));

console.log("--Exercise 4--");

function maximoDelArray(arrayIn){
    var maximo;
    for(var i = 0; i < arrayIn.length; i++){
        if(i == 0){
            maximo = arrayIn[i];
        }
        else if(arrayIn[i] > maximo){
            maximo = arrayIn[i];
        }
    }
    return maximo;
}

var arrayNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log(mostrarElems(arrayNumbers));
console.log("El maximo es: " + maximoDelArray(arrayNumbers));

console.log("--Exercise 5--");

function printPosition(arrayIn, index){
    return arrayIn[index];
}

var arrayNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log("pos 6: " + printPosition(arrayNumbers, 6));

console.log("--Exercise 6--");

function repetidos(arrayIn){
    var count = 0;
    var arrayRep = [];
    for(var i = 0; i < arrayIn.length; i++){
        for(var j = i +1; j < arrayIn.length; j++){
            if(i != j){
                if(arrayIn[i] == arrayIn[j]){
                    count++;
                }
            }
        }
        if(count > 0 && arrayRep.indexOf(arrayIn[i] == -1)){
            arrayRep.push(arrayIn[i]);
        }
       count = 0;
    }
    return arrayRep;
}
var arrayNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var repetidos = repetidos(arrayNumbers);
console.log("repetidos: " + mostrarElems(repetidos));

console.log("--Exercise 7--");

function arrayToString(arrayIn){
    var cadena = "";
    for(var i = 0; i < arrayIn.length; i++){
        cadena += '"';
        cadena += arrayIn[i];
        cadena += '"';
        if(i < arrayIn.length-1){
            cadena += ", ";
        }
    }
    return cadena;
}

var myColor = ["Red", "Green", "White", "Black"];
console.log("cadena: " + arrayToString(myColor));

console.log("---Strings---");

console.log("--Exercise 1--");
 function reverse(stringIn){
    
 }