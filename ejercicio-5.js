//Funcion para una tienda de coches (Funcionando en navegador)

function descuentoCoches (){
    console.log('--Coches Disponibles-- \n1. FORD FIESTA \n2. FORD FOCUS \n3. FORD ESCAPE')
    let opcion = prompt('Ingresa la opcion a elegir: ')
    opcion = parseInt(opcion)
    let descuento = ""
    let coche = ""

    switch (opcion){
        case 1: 
            coche = "FORD FIESTA"
            descuento = "5%"
            break;
        case 2: 
            coche = "FORD FOCUS"
            descuento = "10%"
            break;
        case 3:
            coche = "FORD ESCAPE" 
            descuento = "20%"
            break;
    }
    console.log(`Auto: ${coche} descuento a aplicar: ${descuento}`)
}
 descuentoCoches ()