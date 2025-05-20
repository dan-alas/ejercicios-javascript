//Calcular aumento segun categoria

let nombre = 'El santi';
let salario = 700;
let categoria = 'A';


function calcularAumento (categoria) {
    let calculo = 0;
    let aumento = '';

    switch (categoria) {
        
        case 'A':
            aumento = '15%';
            calculo = (salario * 0.15) + salario;
            break;

        case 'B':
            aumento = '30%';
            calculo = (salario * 0.30) + salario;
            break;

        case 'C':
            aumento = '10%';
            calculo = (salario * 0.10) + salario;
            break;

        case 'D':
            aumento = '20%';
            calculo = (salario * 0.20) + salario;
            break;
    
    }
    console.log(`Nombre: ${nombre} | Salario normal: $${salario} | Aumento ${aumento} | Salario total: $${calculo} `);

}

calcularAumento (categoria);