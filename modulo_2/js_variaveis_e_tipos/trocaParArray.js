function trocaParArray(array){
    if (!array || array == '') return '-1';
    let arrayAuxiliar = []
    for (let i = 0; i < array.length ; i++) {
        if (array[i] % 2 === 0 && array[i] !== 0) {
            arrayAuxiliar.push(0);
        }
        else{
            arrayAuxiliar.push(array[i]);
        }
    }
    return arrayAuxiliar;
}
console.log(trocaParArray([1,3,4,6,80,33,23,90]));
//console.log(trocaParArray([]));