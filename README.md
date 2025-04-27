# MDD-Repositorio

> [!NOTE]
> Hola, soy Barbara Inostroza

//1.
let nombre = "Barbara"
let edad = 20
let mascotas = true

console.log(nombre)
console.log(edad)
console.log(mascotas)





//2.
let a = 8
let b = 10

function Suma(x,y){
    return x + y
}
function Resta(x,y){
    return x - y
}
function Multiplicacion(x,y){
    return x*y
}
function Division(x,y){
    if(x>0 && y>0){
        return x/y
    }
}
console.log("La suma es:", Suma(a,b))
console.log("La resta es:", Resta(a,b))
console.log("La multiplicacion es:", Multiplicacion(a,b))
console.log("La division es:", Division(a,b))





//3.
function Saludo(nombre){

    return "Hola bienvid@ "+ nombre 
}
console.log (Saludo("Barbara"))





//4.
let Frutas = ["uva","kiwi","sandia","piña","manzana"]
for(i=0;i<Frutas.length;i++){
    console.log(Frutas[i])
}





5.
const arrayNumeros = [3,5,6]

const guardarNum = arrayNumeros.map(function(numeros){
    return numeros * 2;
})
console.log("Los nuevos numeros guardados son:", guardarNum)





//6.
let arrayPersonas = [
    {
    "Nombre": "Barbara",
    "Edad": 20,
    },
    {
    "Nombre": "Rodolfo",
    "Edad": 100,
    },
    {
    "Nombre": "Julio",
    "Edad": 90,
    },
    ]
    
arrayPersonas.forEach((desc) => {console.log(desc.Nombre)})






//7.
const arrayNumeros = [1,5,9,2,6,8]

const ordenNumeros = arrayNumeros.filter((numero) => Number(numero)>5)

console.log(ordenNumeros)






//8.
const arrayNumeros = [1,5,9,2,6,8]

const sumaTotal = arrayNumeros.reduce((total,numero)=> {
    return total+numero;
})
console.log("La suma total es: ",sumaTotal)






//9.
async function EsperarMsj(mensaje) {
    await new Promise(resolve=> setTimeout(resolve,2000));
    return "Acaban de pasar dos segundos"
}
async function Inicio(tiempo){
    const tiempoTranscurrido = await EsperarMsj();
    console.log(tiempoTranscurrido);
}
Inicio();