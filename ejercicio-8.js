// tabla de multiplicar de numero que el usuario ingrese
let limite = 10;
let numeroTabla = prompt('Ingresa el numero de la tabla: ');
numeroTabla = parseInt(numeroTabla);

console.log(`La Tabla de multiplicar de ${numeroTabla} es:`);
for (let i = 1; i <= limite; i++) {
    let resultado = numeroTabla * i;
    console.log(`${numeroTabla} x ${i} = ${resultado}`);

}

