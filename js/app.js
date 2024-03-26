alert("un mensaje"); // ejemplo 1
document.write("hello world <br>"); //ejemplo 2

document.write("3 + 5 = ", 3 + 5, "<br>"); //ejemplo 3
//ejemplo 4
let nombre = prompt("ingrese su nombre ❤❤❤");
document.write("hola como estas ? ", nombre + "<br>");
//ejemplo 5
let primerNumero = Number(prompt("ingrese un numero"));
let segundoNumero = Number(prompt("ingrese un numero"));

document.write( "<p class="+"text-primary"+">"+
  "Su primer numero es " +
    primerNumero +
    "<br>" +
    "Su segundo numero es " +
    segundoNumero +
    "<br>" +
    "la suma es " +
    (primerNumero + segundoNumero)+"<br>"+"</p>"
);
//ejemplo 5
let primeNumer = parseInt(prompt("ingrese un numero"));
let segundNumer = parseInt(prompt("ingrese un numero"));
let terceNumer = parseInt(prompt("ingrese un numero"));

document.write(
  "Su primer numero es " +
    primeNumer +
    "<br>" +
    "Su segundo numero es " +
    segundNumer +
    "<br>" +
    "Su segundo numero es " +
    terceNumer +
    "<br>" +
    "la suma es " +
    (primeNumer + segundNumer + terceNumer) +
    "<br>"
);
//ejemplo 6
let averiguarNumer1 = prompt("ingrese un numero para saber cual es mayor");
let averiguarNumer2 = prompt("ingrese otro numero para comparar ");
if (averiguarNumer1 > averiguarNumer2) {
  document.write("el numero mayor era " + averiguarNumer1+"<br>");
} else if (averiguarNumer1 < averiguarNumer2){
  document.write("el numero mayor era " + averiguarNumer2+"<br>");
} else {
  document.write("los numeros eran igules")
}
//ejemplo 7
let averiguaNumer1 = prompt("ingrese un numero para saber cual es mayor");
let averiguaNumer2 = prompt("ingrese otro numero para comparar ");
let averiguaNumer3 = prompt("ingrese otro numero para comparar ");

if (averiguarNumer1 > averiguarNumer2 && averiguaNumer1 > averiguaNumer3) {
  document.write("el numero mayor era " + averiguaNumer1+"<br>");
} else if (averiguaNumer2 > averiguaNumer1 && averiguaNumer2 > averiguaNumer3) {
  document.write("el numero mayor era " + averiguaNumer2+"<br>");
} else if (averiguaNumer1 < averiguaNumer2 && averiguaNumer2 < averiguaNumer3) {
  document.write("el numero mayor era " + averiguaNumer3+"<br>");
}

//ejemplo 8
let div2 = prompt("Ingresa un número:");
div2 = parseInt(div2);
if (div2 % 2 === 0) {
  document.write("El número " + div2 + " es divisible por 2.");
} else {
  document.write("El número " + div2 + " no es divisible por 2.");
}
//ejemplo 10
let numer = prompt("Ingresa un número:");
numero = parseInt(numer);
if (numer % 2 === 0) {
  alert("El número " + numer + " es divisible por 2.");
} else if (numer % 3 === 0) {
  alert("El número " + numer + " es divisible por 3.");
} else if (numer % 5 === 0) {
  alert("El número " + numer + " es divisible por 5.");
} else if (numero % 7 === 0) {
  alert("El número " + numer + " es divisible por 7.");
} else {
  alert("El número " + numer + " no es divisible por 2, 3, 5 ni 7.");
}
// ejemplo 11

let numero = prompt("Ingresa un número:");
numer = parseInt(numero);
let divisores = "";
if (numero % 2 === 0) {
  divisores += "2, ";
}
if (numero % 3 === 0) {
  divisores += "3, ";
}
if (numero % 5 === 0) {
  divisores += "5, ";
}
if (numero % 7 === 0) {
  divisores += "7";
}
if (divisores !== "") {
  document.write("El número " + numero + " es divisible por: " + divisores);
} else {
  document.write("El número " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
