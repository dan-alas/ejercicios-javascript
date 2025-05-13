//funcion para devolver el numero mayor de dos
let num1 = 55
let num2 = 10

function elMayorDeDos (num1, num2) {
    let numeros = [num1, num2]
    let mayor = numeros[0]
    
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > mayor){
            mayor = numeros[i]
        }

    }
    console.log(`El mayor es: ${mayor} `)

}

elMayorDeDos (num1, num2)