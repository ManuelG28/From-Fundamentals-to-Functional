const from = pseudoArray => {
    const array = [];
    for(let i = 0; i < pseudoArray.length; i++){
        array.push(pseudoArray[i]);
    }
    return array;
}

const constructArr = function() {
    const arr = from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};

console.log(constructArr('was','it','in'));