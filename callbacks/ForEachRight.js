const forEachRight = function(callback,array){
    for(let i = array.length-1; i >= 0; i--){
        callback(array[i]);
    }
}

forEachRight((value) => console.log(value), [1,2,3,4,5] )