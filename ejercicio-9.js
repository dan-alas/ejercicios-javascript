//De Celsius a Fahrenheit
let gradosCelsius = prompt('Ingrese los grados celcius para pasar a fahrenheit: ')
gradosCelsius = parseFloat(gradosCelsius)

let conversion = (gradosCelsius * 1.8) + 32;

let estado = ""

if (conversion >= 14 && conversion < 32){
    estado = 'Temperatura baja'
}else if(conversion >= 32 && conversion < 68){
    estado = 'Temperatura adecuada'
}else if ( conversion >= 68 && conversion <= 96){
    estado = 'Temperatura alta'
}else{
    estado = "Temperatura desconocida"
}

console.log(`${gradosCelsius}°C a Fahrenheit son: ${conversion}°F (${estado})`)