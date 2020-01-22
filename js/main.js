console.log("Starting javascript...\n");

//BASICS
console.log("---Basics---");
//EXERCISE B1
console.log("\n--Exercise B1--\n>>>>Cree una variable llamada myName  con su nombre como valor");

var myName = "Diego Morinigo";
console.log("Name: " + myName);

//EXERCISE B2
console.log("\n--Exercise B2--\n>>>>Cree una variable llamada myAge con un número que sea tu edad");

var myAge = 24;
console.log("Age: " + myAge);

//EXERCISE B3
console.log("\n--Exercise B3--\n>>>>Cree una variable llamada ignasiAge con un valor 32. Cree otra variable llamada ageDiff y asignale como valor la diferencia entre ignasiAge y myAge");

var ignasiAge = 32;
var ageDiff = ignasiAge - myAge;
console.log("IgnasiAge - MyAge = " + ageDiff);

//EXERCISE B4
console.log('\n--Exercise B4--\n>>>>Escriba un condicional que compare la variable con su edad con el número 21. Debe imprimir "Tiene más de 21 año" o "No tiene más de 21 años", según su edad.');

function olderOrNot(ageRef, ageIn) {
    if(ageIn > ageRef){
        return ageIn + " is older than " + ageRef;
    }
    else {
        return ageIn + " is not older than " + ageRef;
    }
    
}

var ageRef = 21;
var ageYounger = 10;
console.log("My age " + olderOrNot(ageRef,myAge));
console.log(olderOrNot(ageRef,ageYounger));

//EXERCISE B5
console.log('\n--Exercise B5--\n>>>>Escriba un condicional que compare su edad con la edad de Ignasi. Este condicional deberá comprobar si es mayor, menor o la misma edad, e imprimir, apropiadamente, "Ignasi es mayor que usted", "Ignasi es más joven que usted" o "Tiene la misma edad que Ignasi".');
if(myAge < ignasiAge){
    console.log(myAge + " not older than " + ignasiAge);
}
else if (myAge = ignasiAge) {
    console.log("Equals");
}
else {
    console.log(myAge + " is older " + ignasiAge);
}

//ARRAYS
console.log("\n---Arrays---");
//funcion extra para imprimir el array en un formato
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

//EXERCISE A1
console.log('\n--Exercise A1--\n>>>>Cree un array con todos los nombres de su clase (incluidos los mentores). Ordenar el array alfabéticamente. Imprima el primer elemento de la matriz en la consola. Imprima el último elemento de la matriz en la consola. Imprima todos los elementos de la matriz en la consola. Use un bucle "for".');

var arrayName = ["ariel", "lean", "alan","nahuel","lucas","branco","rodri","ivan","gian","erica","lucio","teo","lucas","roman","rocio","meji","nico","agus","jose","eze","fresco","elias","matias","edu","gabi","nahu","carla","luli","emi"];
console.log("array desordenado: " + mostrarElems(arrayName));
arrayName.sort();
console.log("array ordenado: " + mostrarElems(arrayName));
console.log("Primer elemento: " + arrayName[0]);
console.log("Ultimo elemento: " + arrayName[arrayName.length - 1]);

for(i = 0; i < arrayName.length; i++){
    console.log("Elemento " + i + ": " + arrayName[i]);
}

//EXERCISE A2
console.log('\n--Exercise A2--\n>>>>Cree un array con todas las edades de los estudiantes de su clase. Itere el array con un ciclo while y luego imprima todas las edades en la consola. Agregue un condicional dentro del ciclo while para imprimir solo números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".');
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

//EXERCISE A3
console.log("\n--Exercise A3--\n>>>>Escriba una función que reciba un array como parámetro e imprima el número más bajo del array en la consola.");

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

//EXERCISE A4
console.log("\n--Exercise A4--\n>>>>Escriba una función que reciba un array como parámetro e imprima el mayor número del array en la consola.");

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

//EXERCISE A5
console.log("\n--Exercise A5--\n>>>>Escriba una función que reciba dos parámetros, un array y un índice. La función imprimirá el valor del elemento en la posición dada (basada en uno) en la consola.");

function returnDatInPosition(arrayIn, index){
    return arrayIn[index];
}

var arrayNumbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log("pos 6: " + returnDatInPosition(arrayNumbers, 6));

//EXERCISE A6
console.log("\n--Exercise A6--\n>>>>Escriba una función que reciba un array y solo imprima los valores que se repiten.");

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

//EXERCISE A7
console.log("\n--Exercise A7--\n>>>>Escriba una función JavaScript simple para unir todos los elementos del siguiente array en una cadena.");

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

//STRINGS
console.log("\n---Strings---");
//EXERCISE S1
console.log("\n--Exercise S1--\n>>>>Escriba una función de JavaScript que invierta una cadena.");
 function reverse(stringIn){
    var rever = "";
    for(var i = stringIn.length - 1; i >= 0; i--){
        rever += stringIn[i];
    }
    return rever;
 }

 var cadena = "webmaster";
 console.log("original: " + cadena);
 console.log("reverso: " + reverse(cadena));

 //EXERCISE S2
 console.log("\n--Exercise S2--\n>>>>Escriba una función de JavaScript que devuelva una cadena en orden alfabético.");

function alphaOrder (stringIn){
    var arrayS = stringIn.split("");
    arrayS.sort();
    var orderS = arrayS.join("");
    return orderS;
}

console.log("original: " + cadena);
console.log("ordenado: " + alphaOrder(cadena));

//EXERCISE S3
console.log("\n--Exercise S3--\n>>>>Escriba una función de JavaScript que convierta la primera letra de cada palabra a mayúsculas.");

function mayus(stringIn){
    var arrayS = stringIn.split(" ");
    for(var i = 0; i < arrayS.length; i++){
        arrayS[i] = arrayS[i].charAt(0).toUpperCase() + arrayS[i].slice(1);
    }
    var mayusS = arrayS.join(" ");
    return mayusS;
}

cadena = "prince of persia";
console.log("original: " + cadena);
console.log("Mayusculas: " + mayus(cadena));

//EXERCISE S4
console.log("\n--Exercise S4--\n>>>>Escriba una función de JavaScript que encuentre la palabra más larga en una frase.");

function longWord(stringIn){
    var auxiliar;
    var arrayStrings = stringIn.split(" ");
    for(var i = 0; i < arrayStrings.length; i++){
        if(i == 0){
            auxiliar = arrayStrings[i];
        }
        else if(arrayStrings[i].length > auxiliar.length){
            auxiliar = arrayStrings[i];
        }
    }
    return auxiliar;
}

cadena = "Web Development Tutorial";
console.log("original: " + cadena);
console.log("Palabra mas larga: " + longWord(cadena));