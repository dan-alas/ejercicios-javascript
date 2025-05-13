// Crear una funcion que determine la nota final de un alumno

nombreAlumno = 'Chepito';
carnetAlumno = 123456;

//notas
examen = 10;
tareas = 10;
asistencia = 10;
investigacion = 10;

function notasAlumno (nombreAlumno, carnetAlumno, examen, tareas, asistencia, investigacion) {
    let notaExamen = examen * 0.20;
    let notaTareas = tareas * 0.40;
    let notaAsistencia = asistencia * 0.10;
    let notaInvestigacion = investigacion * 0.30;

    let notaFinal = notaExamen + notaTareas + notaAsistencia + notaInvestigacion;
    console.log(`Carnet: ${carnetAlumno} | Alumno: ${nombreAlumno} | NF: ${notaFinal}`);

}

notasAlumno(nombreAlumno, carnetAlumno, examen, tareas, asistencia, investigacion);