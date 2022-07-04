function comparaNum(a, b){
    if ( !a || !b ) return console.log('Defina dois números válidos diferentes de zero.');
    let comparar = (a === b ) ? "são iguais." : "não são iguais.";
    comparar = `Os números ${a} e ${b} ${comparar}`;

    let soma = a + b;
    let maior10 = (soma > 10) ? "maior" : "menor";
    let maior20 = (soma > 20) ? "maior" : "menor";
    soma = ` Sua soma é ${soma}, que é ${maior10} que 10 e ${maior20} que 20.`;

    console.log(comparar + soma);
}

comparaNum(1,2)
