const arrayNumeros = [1,5,9,2,6,8]

const sumaTotal = arrayNumeros.reduce((total,numero)=> {
    return total+numero;
})
console.log("La suma total es: ",sumaTotal)
