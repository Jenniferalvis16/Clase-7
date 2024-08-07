var message= document.getElementById("message");
messages.textContent = ("Ventas de Esqui");


........................message

//var numero1, numero2, resultado;
 
//numero1 = prompt("Ingrese un numero");
//numero2 = prompt("Ingrese otro numero");
 
//numero1=parseInt(numero1);
//numero2=parseInt(numero2);
 
//resultado = numero1 + numero2;
 
//alert("El resultado de la suma es: " +numero1+ " + " +numero2+ " = " +resultado);
 
 
// Solicitar el ingreso del primer número
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
 
// Solicitar el ingreso del segundo número
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
 
// Comparar los números y mostrar el mensaje correspondiente
if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
    alert(numero2 + " es mayor que " + numero1);
} else {
    alert("Ambos números son iguales");
}