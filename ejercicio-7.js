//Carga de 10 valoress 

valoresNegativos = 0;
valoresPositivos = 0;
multiplosDe15 = 0;
numerosPares = 0;

for (let i = 1; i <= 10; i++){
    let valor = prompt(`Ingresa el valor #${i}: `);
    valor = parseInt(valor);
    if(valor > 0){
        valoresPositivos++
    }
    if (valor < 0){
        valoresNegativos++
    }
    if (valor % 15 === 0){
        multiplosDe15++
    }
    if (valor % 2 == 0){
        numerosPares += valor
    }
}
console.log(`Resultados:\nValores positivos: ${valoresPositivos}\nValores negativos: ${valoresNegativos} \nMúltiplos de 15: ${multiplosDe15} \nSuma de números pares: ${numerosPares}`)