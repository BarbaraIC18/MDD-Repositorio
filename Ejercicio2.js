
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
