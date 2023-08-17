const d=document;
const $boton1 = d.getElementById("btn1");
const $boton2 = d.getElementById("btn2");
const $boton3 = d.getElementById("btn3");
const $boton4 = d.getElementById("btn4");
const $boton5 = d.getElementById("btn5");
const $numero1 = d.getElementById("numero1");
const $numero2 = d.getElementById("numero2");
const $palabra = d.getElementById("palabra");
//Ejercicio 1
function ejercicio1 () {
    console.debug("esto es debug");
    console.warn("esto es warn");
    console.info("esto es info");
    console.error("esto es error");
    console.log("esto es log");
}
$boton1.addEventListener("click",ejercicio1);
//Ejercicio 2
function ejercicio2 (variable) {
    console.log(`El tipo de la variable es: ${typeof variable} y su contenido es: ${variable}`);
}
$boton2.addEventListener("click",()=>{
    let variable=[NaN,undefined,'undefined',"a",false,[1,'2']];
    let index=Math.floor(Math.random()*(variable.length+0.5));
    ejercicio2(variable[index])
});
//Ejercicio 3
function ejercicio3 (num1,num2,op) {
    switch (op) {
        case 0:
            if (isNaN(num1)||isNaN(num2)) {
                console.error("Invalido, casilla vacía o casillas vacías");
            } else {
                console.log(`El resultado de la suma es: ${num1+num2}`);
            }
            break;
        case 1:
            if (isNaN(num1)||isNaN(num2)) {
                console.error("Invalido, casilla vacía o casillas vacías");
            } else {
                console.log(`El resultado de la resta es: ${num1-num2}`);
            }
            break;
        case 2:
            if (isNaN(num1)||isNaN(num2)) {
                console.error("Invalido, casilla vacía o casillas vacías");
            } else {
                console.log(`El resultado de la multiplicación es: ${num1*num2}`);
            }
            break;
        case 3:
            if (isNaN(num1)||isNaN(num2)) {
                console.error("Invalido, casilla vacía o casillas vacías");
            } else {
                if (num2!=0) {
                    console.log(`El resultado de la división es: ${num1/num2}`);
                } else {
                    console.error("Invalido, el número 2 es 0");
                }
            }
            break;
        default:
            console.error("Invalido");
            break;
    }
}
$boton3.addEventListener("click",() =>{
    let option = Math.floor(Math.random()*3.5);
    ejercicio3(parseInt($numero1.value),parseInt($numero2.value),option);
});
//Ejercicio 4
function ejercicio4(palabra, op) {
    switch (op) {
        case 'minus':
            console.log(`${palabra.toLowerCase()}`);
            break;
        case 'mayus':
            console.log(`${palabra.toUpperCase()}`);
            break;
        default:
            console.error("Invalido");
            break;
    }
}
$boton4.addEventListener('click', () => {
    let variable=['minus','mayus'];
    let index=Math.floor(Math.random()*(variable.length+0.0078125));
    ejercicio4($palabra.value.toString(),variable[index])
});
//Ejercicio 5
function ejercicio5(time){
    return time.filter(element => element > 120);
}
$boton5.addEventListener('click', () =>{
    let time=[120, 80, 200, 100, 150,220];
    console.log(`Las cantidades mayores a 2 horas son : ${ejercicio5(time)}`);
});