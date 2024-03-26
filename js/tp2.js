/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.*/
function eje1() {
  let edad = Number(prompt("ingrese su edad"));
  edad = parseInt(edad);
  if (edad < 18) {
    alert("usted no puede conducir");
  } else {
    alert("usted puede conducir");
  }
}

/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota: */
function eje2() {
  let nota = prompt("ingrese su nota");
  if (isNaN(nota)) {
    alert("ingrese una nota valida ");
  } else if (nota >= 0 && nota <= 10) {
    nota = parseInt(nota);
    switch (nota) {
      case 1:
        alert("Muy insuficiente");
        break;
      case 2:
        alert("Muy insuficiente");
        break;
      case 3:
        alert("Insuficiente");
        break;
        case 4:
        alert("Insuficiente");
        break;
      case 5:
        alert("suficiente");
        break;
        case 6:
        alert("suficiente");
        break;
      case 7:
        alert("Bien");
        break;
      case 8:
        alert("Notable");
        break;
        case 9:
        alert("Notable");
        break;
      case 10:
        alert("Sobresaliente");
        break;
        default:
        break;
    }
  } else {
    alert("introducir un numero valido");
  }
}

/*  
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -
 */
function eje3() {
  let cadenas = "";
  let texto;
  while (true) {
    texto = prompt("ingrese un texto");
    if (texto === null) {
      break;
    } else {
      cadenas = `${cadenas} - ${texto}`;
    }
  }
  alert(`su texto era  ${cadenas}`);
}
/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos*/
function eje4() {
  let suma = 0;
  let numeros;
  while (true) {
    numeros = prompt("ingrese un numero para hacer una sumatoria");
    if (numeros === null) {
      break;
    } else {
      suma += parseInt(numeros);
    }
  }
  alert(`la suma de todos los numeros es ${suma}`);
}
/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’
*/
function eje5() {
  let cifrado =
  [
    "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N",
    "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
  ];
  do {
    let dni = prompt("ingrese su dni");
    if (dni > 0 && dni < 99999999) {
      alert(`la letra que le corresponde es ${cifrado[dni % 23]}`);
      break;
    } else if (isNaN(dni)) {
      alert("ingrese un numero valido");
    } else {
      break;
    }
  } while (true);
}
/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
 */

function eje6() {
  for (let i = 1; i <= 30; i++) {
    for (let j = 0; j < i; j++) {
      document.write(`${i}`);
    }
    document.write("</br>");
  }
}
/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)
  de la siguiente forma : (suponiendo que indica 30).
 */

function eje7() {
  let piramide = prompt(
    "de que tamaño desea la piramide, recuerde que no sea mayor a 50"
  );
  piramide = parseInt(piramide);
  if (piramide <= 50) {
    for (let i = 0; i <= piramide; i++) {
      for (let j = piramide; j > i; j--) {
        let inversa = piramide - i;
        document.write(inversa);
      }
      document.write("</br>");
    }
  } else {
    alert("ingrese un numero dentro de la escala");
  }
}
/* Crea script para generar pirámide siguiente
 con los números del 1 al número que indique el usuario (no mayor de 50)  */
function eje8() {
  let piramide = prompt(
    "de que tamaño desea la piramide, recuerde que no sea mayor a 50"
  );
  piramide = parseInt(piramide);
  if (piramide <= 50) {
    for (let i = 1; i <= piramide; i++) {
      for (let j = 0; j < i; j++) {
        document.write(`${j+1}`);
      }
      document.write("</br>");
    }
  } else {
    alert("ingrese un numero dentro de la escala");
  }
}
/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. */
function eje9() {
  for (let i = 0; i <= 500; i++) {
    document.write(`${i}`);
    if (i % 4 === 0) {
      document.write(` - multiplo de 4 `);
    }
    if (i % 9 === 0) {
      document.write(` - multiplo de 9 `);
    }
    if (i % 5 === 0) {
      document.write(`   </br> -----------`);
    }
    document.write("</br>");
  }
}
/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá 
escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
function eje10() {
  alert(
    "Acontinuacion se le pediran filas y columnas para crear una tabla con numeros decendetes"
  );
  let filas = prompt("ingrese el numero de filas");
  filas = parseInt(filas);
  let columnas = prompt("ingrese el numero de columnas");
  columnas = parseInt(columnas);
  let numero = filas * columnas;
  columnas = parseInt(columnas);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      document.write(numero);
      numero--;
    }
    document.write("</br>");
  }
}
/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
 */
function eje11() {
  alert("A continuacion se le pediran 3 nombres y las edades correspondientes");
  let nombre1 = prompt("ingrese el primer nombre");
  let edad1 = parseInt(prompt("ingrese la edad correspondiente"));
  let nombre2 = prompt("ingrese el segundo nombre");
  let edad2 = parseInt(prompt("ingrese la edad correspondiente"));
  let nombre3 = prompt("ingrese el tercer nombre");
  let edad3 = parseInt(prompt("ingrese la edad correspondiente"));
  let mayor = Math.max(edad1, edad2, edad3);
  if (mayor === edad1) {
    alert(`El mayor es ${nombre1} con ${edad1} años`);
  } else if (mayor == edad2) {
    alert(`El mayor es ${nombre2} con ${edad2} años`);
  } else if (mayor === edad3) {
    alert(`El mayor es ${nombre3} con ${edad3} años`);
  } else {
    alert("error");
  }
}
/*12- Realiza un script que genere un número aleatorio entre 1 y 99 */
function eje12() {
  alert("su numero aleatorio entre 1 y 99 es " + parseInt(Math.random() * 100));
}
/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/
function eje13() {
  let texto = prompt("ingrese un texto");
  let texMayu = texto.toUpperCase();
  alert(`su texto en mayusculas es : " ${texMayu} "`);
}
/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/
function eje14() {
  let texto = prompt("ingrese un texto");
  let textGuiones = "";
  for (let i = 0; i < texto.length; i++) {
    textGuiones += texto[i];
    if (i < texto.length - 1) {
      textGuiones += "-";
    }
  }
  alert(`su texto con guiones es ${textGuiones}`);
}
/*
15- Realiza un script que cuente el número de vocales que tiene un texto.*/
function eje15() {
  let texto = prompt("ingrese un texto");
  let contarVoc = 0;
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        contarVoc++;
        break;
      case "e":
        contarVoc++;
        break;
      case "i":
        contarVoc++;
        break;
      case "o":
        contarVoc++;
        break;
      case "u":
        contarVoc++;
        break;

      default:
        break;
    }
  }
  alert(`su texto tenia ${contarVoc} vocales`);
}

/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */
function eje16() {
  let texto = prompt("ingrese un texto");
  let invTexto = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invTexto += texto[i];
  }
  alert(`su texto al revez es: "${invTexto}" `);
}

/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */
function eje17() {
  let texto = prompt("ingrese un texto");

  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        alert(`la vocal ${texto[i]} se encuentra en la posicion ${i + 1}`);
        break;
      case "e":
        alert(`la vocal ${texto[i]} se encuentra en la posicion ${i + 1}`);
        break;
      case "i":
        alert(`la vocal ${texto[i]} se encuentra en la posicion ${i + 1}`);
        break;
      case "o":
        alert(`la vocal ${texto[i]} se encuentra en la posicion ${i + 1}`);
        break;
      case "u":
        alert(`la vocal ${texto[i]} se encuentra en la posicion ${i + 1}`);
        break;

      default:
        break;
    }
  }
}
