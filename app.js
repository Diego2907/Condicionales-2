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

let dia = prompt("dame el dia").toLowerCase();
switch (dia) {
    case 'lunes':
        console.log('El dia que escogiste es lunes');
        break;
    case 'martes':
        console.log('El dia que escogiste es martes');
        break;
    case 'miercoles':
        console.log('El dia que escogiste es miercoles');
        break;
    case 'jueves':
        console.log('El dia que escogiste es jueves');
        break;
    case 'viernes':
        console.log('El dia que escogiste es viernes');
        break;
    case 'sabado':
        console.log('El dia que escogiste es sabado');
        break;
    case 'domingo':
        console.log('El dia que escogiste es domingo');
        break;
    default: 
        console.log('este no es un dia');
        break;
}