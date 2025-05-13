//Descuentos

function descuentoEnViajes () {
    console.log(`--- Viajes disponibles Ciudad de Palma --- \n1. La costa del sol \n2. Panchimalco \n3. Puerto el Triunfo`);
    let opcion = prompt('Escoja su destino: ');
    opcion = parseInt(opcion);
    let destino = ''
    let descuento = ''

    switch(opcion){
        case 1: 
            destino = 'La costa del sol';
            descuento = '5%';
            break;
        case 2: 
            destino = 'Panchimalco';
            descuento = '10%';
            break;
        case 3: 
            destino = 'Puerto el triunfo';
            descuento = '15%';
            break;
    }
    console.log(`El destino seleccionado es: ${destino} por ende el descuento es: ${descuento}`)

}

descuentoEnViajes()