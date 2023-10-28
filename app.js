"Use strict"
// condicionales if, else if, switch 

// let numero1 = 23;
// let numero2 = 20;

// if (numero1 > numero2) {
//     console.log("el numero : "+ numero1 + "es mayor que el numero"+ numero2)
// }
// else {
//     console.log("el numero : "+ numero2 + "es mayor que el numero"+ numero1)
// }

// EDADEEEEEEEEEEEES
// let edad = prompt("dame tu edad")
// if (edad<0) {
//     if (edad>=18) {
//         document.write("Mayor de edad")
//     }
//     else{
//          document.write("Menor de edad")   
//     }
//     document.write("Edad no valida")
// }

// let dia = prompt("dame el dia").toLowerCase();
// switch (dia) {
//     case 'lunes':
//         console.log('El dia que escogiste es lunes');
//         break;
//     case 'martes':
//         console.log('El dia que escogiste es martes');
//         break;
//     case 'miercoles':
//         console.log('El dia que escogiste es miercoles');
//         break;
//     case 'jueves':
//         console.log('El dia que escogiste es jueves');
//         break;
//     case 'viernes':
//         console.log('El dia que escogiste es viernes');
//         break;
//     case 'sabado':
//         console.log('El dia que escogiste es sabado');
//         break;
//     case 'domingo':
//         console.log('El dia que escogiste es domingo');
//         break;
//     default: 
//         console.log('este no es un dia');
//         break;
// }

// OPERADOR TERNARIO

// let numero1 = 15
// let numero2 = 20

//             // condicion ? true : false 

// let valor = (numero1 > numero2) ? 'El numero1 es mayor' : 'El numero2 es mayor';

// console.log(valor);

// PRIMER EJERCICIO

// let valor1= prompt ('Ingresa el primer numero');
// let valor2= prompt ('Ingresa el segundo numero');

// if (valor1 === valor2){
//     console.log('son iguales');
// }else{
//     if (valor1> valor2){
//         console.log('el primer valor es mayor');
//     }else{
//         console.log('el segundo valor es mayor');
//     }
// }

// SEGUNDO EJERCICIO

// let valor1 = prompt('Dame un numero')
// if(valor1 %2){
//     console.log('El numero es inpar')
// }else{
//     console.log('El numero es par')
// }

// TERCER EJERCICIO

// let valor1 = prompt('Dame un numero');
// let valor2 = prompt('Dame otro numero');


// if (valor2 == 0 || valor1 == 0){    
//     console.log('Error');
// }else{
//     let resultado = valor1/valor2;
//     console.log(resultado);
// }

// CUARTO EJERCICIO

let valor1 = prompt('Dame un numero');
let valor2 = prompt('Dame otro numero');

let operacion = prompt('¿Que es lo que quieres hacer?');

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

switch (operacion) {
    case 'sumar':
        let suma = (valor1+valor2);
        console.log(suma);
        break;
    case 'restar':
        let resta = valor1 - valor2;
        console.log(resta);
        break;
    case'multiplicar':
        let multiplicacion = valor1 * valor2;
        console.log(multiplicacion);
        break;
    case 'dividir':
        let division = valor1 / valor2;
        console.log(division);
        break;
    default:
        console.log('Operacion invalida o escrita de manera incorrecta, intenta de nuevo');
        break;
    }

