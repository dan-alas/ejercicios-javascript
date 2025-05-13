//Funcion para devolver si una persona es mayor de edad o no.


function verificarEdad (edad) {
    if (edad >0 && edad < 18){
        console.log('Es menor de edad');
    }else if (edad >= 18){
        console.log('Es mayor de edad');
    }else{
        console.log('Fuera de Rango')
    }
}

verificarEdad(18)