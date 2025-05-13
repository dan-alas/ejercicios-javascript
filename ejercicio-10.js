// Promedio de edad de estudiantes

let turnoMañana = [];
let turnoTarde = [];
let turnoNoche = [];

for (let i = 1; i <= 5; i++) {
    let alumno = parseInt(prompt(`Ingresa la edad #${i} (estudiante de la mañana): `));
    turnoMañana.push(alumno);
}

for (let i = 1; i <= 6; i++) {
    let alumno = parseInt(prompt(`Ingresa la edad #${i} (estudiante de la tarde): `));
    turnoTarde.push(alumno);
}

for (let i = 1; i <= 11; i++) {
    let alumno = parseInt(prompt(`Ingresa la edad #${i} (estudiante de la noche): `));
    turnoNoche.push(alumno);
}

function calcularPromedio(turno) {
    let suma = 0;
    for (let i = 0; i < turno.length; i++) {
        suma += turno[i];
    }
    return parseInt(suma / turno.length); 
}

let promedioMañana = calcularPromedio(turnoMañana);
let promedioTarde = calcularPromedio(turnoTarde);
let promedioNoche = calcularPromedio(turnoNoche);

console.log(`Promedio turno Mañana: ${promedioMañana}`);
console.log(`Promedio turno Tarde: ${promedioTarde}`);
console.log(`Promedio turno Noche: ${promedioNoche}`);

let mayorTurno = "";
if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
    mayorTurno = "Turno Mañana";
} else if (promedioTarde > promedioNoche) {
    mayorTurno = "Turno Tarde";
} else {
    mayorTurno = "Turno Noche";
}

console.log(`El turno con el promedio de edad más alto es: ${mayorTurno}`);
