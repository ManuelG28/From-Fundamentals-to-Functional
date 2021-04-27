function filter(callback, accumulator, array){
    for(let i = 0; i < array.length; i++){
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

console.log(filter((acumulator, currentValue) => acumulator + currentValue, 0, [1,2,3,4,5]));
